import { env } from '$env/dynamic/private';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { SignJWT } from 'jose';
import NewsletterVerify from '$lib/emails/NewsletterVerify.svelte';
import { createSubscribeToken } from '$lib/jwt';
import { sendEmail } from '$lib/emails/email';
import table from '$lib/airtable';

export const actions = {
  default: async ({ url, request }) => {
    const data = await request.formData();
    const email = data.get('email');

    if (email === null) {
      return redirect(303, '/');
    }

    if (email instanceof File) {
      return fail(400, { message: 'Attempted to upload a file?' });
    }

    if (email.includes("'") || email.includes('\\')) {
      return fail(400, { message: 'Forbidden characters used' });
    }

    const existingRecord = await table
      .select({
        maxRecords: 1,
        filterByFormula: `{Email} = '${email}'`
      })
      .firstPage();

    let airtableId: string;
    if (existingRecord.length == 0) {
      try {
        airtableId = (
          await table.create({
            Email: email,
            Verified: false
          })
        ).getId();
      } catch (_) {
        return fail(400, { message: 'Invalid email address' });
      }
    } else {
      if (existingRecord[0].get('Verified')) {
        // They're already subscribed...
        return redirect(303, '/email/subscribe/thanks');
      }

      airtableId = existingRecord[0].getId();
    }

    const token = await createSubscribeToken(email, airtableId);
    await sendEmail(
      email,
      NewsletterVerify,
      {
        email,
        url: `${url.origin}/email/subscribe?token=${token}`
      },
      url
    );

    return redirect(303, '/email');
  }
} satisfies Actions;

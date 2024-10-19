import { env } from '$env/dynamic/private';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { SignJWT } from 'jose';
import NewsletterVerify from '$lib/emails/NewsletterVerify.svelte';
import { createSubscribeToken } from '$lib/jwt';
import { renderEmail } from '$lib/emails/email';

export const actions = {
  default: async ({ url, request }) => {
    const data = await request.formData();
    const email = data.get('email');

    if (email === null) {
      return redirect(303, '/');
    }

    if (email instanceof File) {
      return fail(400);
    }

    const airtableResponse = await fetch(`https://api.airtable.com/v0/${env.AIRTABLE_BASE}/${env.AIRTABLE_TABLE}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.AIRTABLE_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fields: {
          Email: email,
          Verified: false
        }
      })
    });

    if (airtableResponse.status !== 200) {
      console.error(`Failed to add record to airtable: ${await airtableResponse.text()}`);
      return fail(500);
    }

    const { id: airtableId } = await airtableResponse.json();
    const token = await createSubscribeToken(email, airtableId);
    const { html, plain } = renderEmail(
      NewsletterVerify,
      {
        email,
        url: `${url.origin}/email/subscribe?token=${token}`
      },
      url
    );

    const emailResponse: any = await (
      await fetch('https://api.postmarkapp.com/email', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Postmark-Server-Token': env.POSTMARK_TOKEN
        },
        body: JSON.stringify({
          From: env.POSTMARK_EMAIL_FROM,
          To: email,
          Subject: 'Verify your email address for Revolution',
          HtmlBody: html,
          TextBody: plain
        })
      })
    ).json();

    if (emailResponse.ErrorCode !== 0) {
      console.error(`Failed to send an email: ${emailResponse.Message}`);
      return fail(500, { message: 'Internal server error' });
    }

    return redirect(303, '/email');
  }
} satisfies Actions;

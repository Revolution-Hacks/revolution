import { env } from '$env/dynamic/private';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { SignJWT } from 'jose';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const email = data.get('email');
    if (email === null) {
      return fail(400, { message: 'No email provided' });
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

    const airtableId = (await airtableResponse.json()).id;

    const secret = new TextEncoder().encode(env.EMAIL_SIGNING_KEY);
    const alg = 'HS256';
    const jwt = await new SignJWT({ email: email, action: 'subscribe', id: airtableId })
      .setProtectedHeader({ alg })
      .setIssuedAt()
      .setIssuer('https://revohacks.com/')
      .setAudience('https://revohacks.com/')
      .setExpirationTime('7d')
      .sign(secret);

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
          HtmlBody: `
          Hi ${email}! You're getting this email because you entered your email into our sign-up form.<br>
          <a href="https://revohacks.com/email/subscribe?token=${jwt}">Click this link to verify your email address.</a><br>
          This link will expire in 7 days.<br>
          If you did not sign up to hear from us, ignore this email.
        `
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

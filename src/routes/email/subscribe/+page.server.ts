import { env } from '$env/dynamic/private';
import { sendEmail } from '$lib/emails/email';
import { validateSubscribeToken } from '$lib/jwt';
import { redirect, type Actions } from '@sveltejs/kit';
import table from '$lib/airtable';

export const actions = {
  default: async ({ url }) => {
    const token = url.searchParams.get('token');

    if (token === null) {
      return redirect(303, '/');
    }

    const payload = await validateSubscribeToken(token);

    await table.update([
      {
        id: payload.id,
        fields: {
          Verified: true
        }
      }
    ]);

    return redirect(303, '/email/subscribe/thanks');
  }
} satisfies Actions;

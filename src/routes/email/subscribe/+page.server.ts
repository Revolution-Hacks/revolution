import type { PageServerLoad } from './$types';
import { env } from '$env/dynamic/private';
import { validateUnsubscribeToken } from '$lib/jwt';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ url }) => {
  const token = url.searchParams.get('token');

  if (token === null) {
    return redirect(303, '/');
  }

  const payload = await validateUnsubscribeToken(token);

  await (
    await fetch(`https://api.airtable.com/v0/${env.AIRTABLE_BASE}/${env.AIRTABLE_TABLE}/${payload.id}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${env.AIRTABLE_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fields: {
          Verified: true
        }
      })
    })
  ).json();
};

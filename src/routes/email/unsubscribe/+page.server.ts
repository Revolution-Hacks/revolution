import type { PageServerLoad } from './$types';
import { env } from '$env/dynamic/private';
import { validateUnsubscribeToken } from '$lib/jwt';
import { redirect } from '@sveltejs/kit';
import table from '$lib/airtable';

export const load: PageServerLoad = async ({ url }) => {
  const token = url.searchParams.get('token');

  if (token === null) {
    return redirect(303, '/');
  }

  const payload = await validateUnsubscribeToken(token);

  await table
    .select({
      filterByFormula: `'{Email}' = '${payload.email}'`
    })
    .eachPage(async (records, nextPage) => {
      await table.destroy(
        records.map((v) => {
          return v.getId();
        })
      );

      nextPage();
    });

  return redirect(303, '/email/unsubscribe/thanks');
};

import { jwtVerify } from "jose";
import type { PageServerLoad } from "./$types";
import { env } from "$env/dynamic/private";
import { fail } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ url }) => {
  const token = url.searchParams.get("token");
  
  if (token === null) {
    return fail(400);
  }
  
  const secret = new TextEncoder().encode(env.EMAIL_SIGNING_KEY)
  const { payload } = await jwtVerify(token, secret, {
    issuer: "https://revohacks.com/",
    audience: "https://revohacks.com/"
  })
  
  if (payload.action !== "subscribe") {
    return fail(400);
  }
  
  await (await fetch(`https://api.airtable.com/v0/${env.AIRTABLE_BASE}/${env.AIRTABLE_TABLE}/${payload.id}`, {
    method: "PATCH",
    headers: {
      "Authorization": `Bearer ${env.AIRTABLE_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "fields": {
        "Verified": true
      }
    })
  })).json();
}
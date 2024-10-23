import { convert } from 'html-to-text';
import { env } from '$env/dynamic/private';
import juice from 'juice';
import type { Component } from 'svelte';
import { render } from 'svelte/server';
import DevFooter from '$lib/emails/DevFooter.svelte';
import { error, fail } from '@sveltejs/kit';

export function renderEmail<T extends Record<string, any>>(
  component: Component<T & { host: URL }>,
  props: T,
  host: URL
): { html: string; plain: string } {
  (props as T & { host: URL }).host = host;
  let { head, body } = render(component, {
    props: props as T & { host: URL }
  });

  if (host.origin !== 'https://revohacks.com') {
    const { head: devHead, body: devBody } = render(DevFooter);
    head += devHead;
    body += devBody;
  }

  return {
    html: juice(`<!DOCTYPE html><html><head>${head}</head><body>${body}</body></html>`),
    plain: convert(body)
  };
}

export async function sendEmail<T extends Record<string, any>>(
  recipient: string,
  component: Component<T & { host: URL }>,
  props: T,
  host: URL
) {
  const { html, plain } = renderEmail(component, props, host);

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
        To: recipient,
        Subject: 'Verify your email address for Revolution',
        HtmlBody: html,
        TextBody: plain
      })
    })
  ).json();

  console.log(emailResponse);

  if (emailResponse.ErrorCode !== 0) {
    if (emailResponse.ErrorCode === 300) {
      throw error(400, { message: 'Invalid email address' })
    }
    
    console.error(`Failed to send an email: ${emailResponse.Message}`);
    throw error(500, { message: 'Internal server error' });
  }
}

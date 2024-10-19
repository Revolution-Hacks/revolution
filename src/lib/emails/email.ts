import { convert } from 'html-to-text';
import juice from 'juice';
import type { Component } from 'svelte';
import { render } from 'svelte/server';
import DevFooter from '$lib/emails/DevFooter.svelte';

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

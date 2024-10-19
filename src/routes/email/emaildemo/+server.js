import NewsletterVerify from '$lib/emails/NewsletterVerify.svelte';
import { renderEmail } from '$lib/emails/email';

export const GET = ({ url }) => {
  const { html, plain } = renderEmail(NewsletterVerify, {
    email: 'john@gmail.com',
    url: 'https://google.com/'
  });

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html'
    }
  });
};

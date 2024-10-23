import TitleFontURL from '$lib/fonts/DMSans.title.woff2?url';
import TextFontURL from '$lib/fonts/DMSans.text.woff2?url';
import type { Handle } from '@sveltejs/kit';

const PRELOADED_ASSETS = [TitleFontURL, TextFontURL];

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);

  // Disable JS preloading. This took hours to find.
  // I hate web development.
  // TODO: Select assets to preload
  let link =
    response.headers
      .get('link')
      ?.split(',')
      ?.filter((v) => !v.includes('.js')) || [];

  for (const asset of PRELOADED_ASSETS) {
    link.push(`<${asset}>; rel="preload"; as="font"; nopush`);
  }

  response.headers.set('link', link.join(','));

  return response;
};

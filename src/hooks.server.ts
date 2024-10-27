import TitleFontURL from '$lib/fonts/DMSans.title.woff2?url';
import TextFontURL from '$lib/fonts/DMSans.text.woff2?url';
import type { Handle } from '@sveltejs/kit';

const PRELOADED_FONTS = [TitleFontURL, TextFontURL];

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);

  // Disable JS preloading. This took hours to find.
  // I hate web development.
  let link =
    response.headers
      .get('link')
      ?.split(',')
      ?.filter((v) => !v.includes('.js')) || [];

  for (const asset of PRELOADED_FONTS) {
    link.push(`<${asset}>; rel="preload"; as="font"; crossorigin="anonymous"`);
  }
  
  link.push(`</api/background.svg>; rel="preload"; as="image";`);

  response.headers.set('link', link.join(','));
  response.headers.set(
    'Accept-CH',
    'Width, Viewport-Width, Sec-CH-Width, Sec-CH-Viewport-Width, Sec-CH-Viewport-Height, Sec-CH-UA-Mobile'
  );

  return response;
};

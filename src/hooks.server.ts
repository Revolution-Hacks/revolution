import TextFontURL from '$lib/fonts/DMSans.text.woff2?url';
import Bomb from '$lib/bomb.zstd?arraybuffer'
import type { Handle } from '@sveltejs/kit';

const PRELOADED_FONTS = [TextFontURL];

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);
  
  // To be silly, send 2 gigabytes of <div>
  if (response.status === 404 && event.url.pathname.includes("wp-")) {
    return new Response(Bomb, {
      status: 200,
      headers: {
        'Content-Encoding': 'zstd',
        'Content-Type': 'text/html'
      }
    })
  }

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

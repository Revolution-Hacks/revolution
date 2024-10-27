import { render } from 'svelte/server';
import Background from './Background.svelte';

let WIDTH_HEADERS = ['Width', 'Viewport-Width', 'Sec-CH-Width', 'Sec-CH-Viewport-Width'];
let HEIGHT_HEADERS = ['Sec-CH-Viewport-Height'];
let MOBILE_INDICATORS = ['mobile', 'android', 'iphone'];

export const prerender = false;

export const GET = async ({ request }: { request: Request }) => {
  // Try detect viewport height
  let width = 1920;

  for (const header of WIDTH_HEADERS) {
    const headerContent = request.headers.get(header);
    if (headerContent !== null) {
      const newWidth = parseInt(headerContent);

      if (isFinite(newWidth) && newWidth > 200) {
        width = Math.abs(parseInt(headerContent));
        break;
      }
    }
  }

  // Now try detect viewport width
  let height = null;

  for (const header of HEIGHT_HEADERS) {
    const headerContent = request.headers.get(header);
    if (headerContent !== null) {
      const newHeight = Math.abs(parseInt(headerContent));

      if (isFinite(newHeight) && newHeight > 200) {
        height = newHeight;
        break;
      }
    }
  }

  // If that fails, try detect whether it is mobile and derive an aspect ratio from that
  if (height == null) {
    let aspectRatio = 0.5625;

    const userAgent = request.headers.get('User-Agent');
    if (userAgent !== null) {
      for (const indicator of MOBILE_INDICATORS) {
        if (userAgent.toLowerCase().includes(indicator)) {
          aspectRatio **= -1;
          break;
        }
      }
    }
    
    console.log(`Derived aspect ratio ${aspectRatio}`)

    height = width * aspectRatio;
  }
  
  console.log(`${height} ${width}`);

  // Now render the background and return it
  // Create an insecure random seed from the request headers
  const seed = Array.from([...request.headers].join('')).reduce(
    (hash, char) => 0 | (31 * hash + char.charCodeAt(0)),
    0
  );
  const svg = render(Background, {
    props: { width, height, seed }
  });

  // Evil...
  let body = svg.body.replaceAll(/<!--[\[\]]?!?\??-->/g, '');

  return new Response(body, {
    status: 200,
    headers: {
      Vary: 'Width, Viewport-Width, Sec-CH-Width, Sec-CH-Viewport-Width, Sec-CH-Viewport-Height, Sec-CH-UA-Mobile',
      'Content-Type': 'image/svg+xml'
    }
  });
};

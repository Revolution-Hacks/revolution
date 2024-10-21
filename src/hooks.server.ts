import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);

  // Disable JS preloading. This took hours to find.
  // I hate web development.
  // TODO: Select assets to preload
  const link = response.headers.get('link');
  response.headers.set(
    'link',
    link
      ?.split(',')
      ?.filter((v) => !v.includes('.js'))
      ?.join(',') || ''
  );

  return response;
};

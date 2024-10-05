export async function handle({ event, resolve }) {
  const response = await resolve(event);

  // Disable JS preloading. This took hours to find.
  // I hate web development.
  // TODO: Select assets to preload
  response.headers.set('link', '');

  return response;
}

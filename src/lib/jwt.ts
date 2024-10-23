import { env } from '$env/dynamic/private';
import { error, fail } from '@sveltejs/kit';
import { jwtVerify, SignJWT } from 'jose';

const ISSUER = 'https://revohacks.com/';
const AUDIENCE = 'https://revohacks.com/';

const secret = new TextEncoder().encode(env.EMAIL_SIGNING_KEY);

const SUBSCRIBE_TOKEN_VERSION = 1;
type SubscribeToken = {
  version: typeof SUBSCRIBE_TOKEN_VERSION;
  action: 'subscribe';
  email: string;
  id: string;
};

/**
 * Create a token that can be used later to subscribe someone to the newsletter.
 * It expires 7 days from its creation.
 */
export async function createSubscribeToken(email: string, airtableId: string) {
  const alg = 'HS256';
  const jwt = await new SignJWT({
    version: SUBSCRIBE_TOKEN_VERSION,
    email: email,
    action: 'subscribe',
    id: airtableId
  })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setIssuer(ISSUER)
    .setAudience(AUDIENCE)
    .setExpirationTime('7d')
    .sign(secret);

  return jwt;
}

/**
 * Validate a token generated by createSubscribeToken.
 * On validation error, throws a fail exception that will return 400 Bad Request.
 */
export async function validateSubscribeToken(token: string): Promise<SubscribeToken> {
  let payload: SubscribeToken;
  try {
    payload = (
      await jwtVerify(token, secret, {
        issuer: ISSUER,
        audience: AUDIENCE
      })
    ).payload as SubscribeToken;
  } catch (e) {
    console.error(`JWT validation error: ${e}`);
    throw error(400, { message: 'Invalid or expired link' });
  }

  if (payload.version !== SUBSCRIBE_TOKEN_VERSION || payload.action !== 'subscribe') {
    throw error(400, { message: 'Wrong endpoint for token' });
  }

  return payload;
}

const UNSUBSCRIBE_TOKEN_VERSION = 1;
type UnsubscribeToken = {
  version: 1;
  action: 'unsubscribe';
  email: string;
};

/**
 * Create an unsubscribe token.
 * It never expires.
 */
export async function createUnsubscribeToken(email: string) {
  const alg = 'HS256';
  const jwt = await new SignJWT({
    version: UNSUBSCRIBE_TOKEN_VERSION,
    email: email,
    action: 'unsubscribe'
  })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setIssuer(ISSUER)
    .setAudience(AUDIENCE)
    .sign(secret);

  return jwt;
}

/**
 * Validate a token generated by createUnsubscribeToken.
 * On validation error, throws a fail exception that will return 400 Bad Request.
 */
export async function validateUnsubscribeToken(token: string): Promise<UnsubscribeToken> {
  let payload: UnsubscribeToken;
  try {
    payload = (
      await jwtVerify(token, secret, {
        issuer: ISSUER,
        audience: AUDIENCE
      })
    ).payload as UnsubscribeToken;
  } catch (e) {
    console.error(`JWT validation error: ${e}`);
    throw error(400, { message: 'Invalid or expired link' });
  }

  if (payload.version !== SUBSCRIBE_TOKEN_VERSION || payload.action !== 'unsubscribe') {
    throw error(400, { message: 'Wrong endpoint for token' });
  }

  return payload;
}

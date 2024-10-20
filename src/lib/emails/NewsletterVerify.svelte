<svelte:options css="injected" />

<script lang="ts">
  export let email: string;
  export let url: string;
  export let host: URL;
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
  <meta name="color-scheme" content="light dark" />
  <meta name="supported-color-schemes" content="light dark" />
</svelte:head>

<div class="main">
  <div
    class="hero"
    style="background:
      center/100% url('{host.origin}/email-hero.png'),
      #342114;"
  >
    <h1>Please verify your email address</h1>
  </div>

  <div class="content">
    <p>Hi {email}! You're getting this email because you entered your email into our sign-up form.</p>
    <p>
      <a href={url}>Click this link to verify your email address.</a>
      We'll only send you an email when something big happens.
    </p>
    <p>If you did not sign up to hear from us or no longer want to hear from us, ignore this email.</p>
  </div>
</div>

<div class="content main footer">
  <p>This is a transactional email. You cannot unsubscribe from it.</p>
  <p>10 Downing Street, London, SW1A 2AA</p>
  <p><a href="https://revohacks.com">Revolution</a></p>
  <p>
    Revolution is fiscally sponsored by The Hack Foundation (d.b.a Hack Club), a 501(c)(3) nonprofit (EIN: 81-2908499).
    Revolution is not an official Hack Club event. Use of Hack Club branding does not constitute an endorsement, implied
    or otherwise, of Revolution by Hack Club.
  </p>
</div>

<style lang="scss">
  @use 'src/lib/style';

  .main {
    font-family: 'DM Sans', system-ui, sans-serif;
    margin: auto;
    max-width: 480px;
  }

  .footer {
    background: rgba(var(--dim), 20%);
  }

  .content {
    box-sizing: border-box;
    padding: 1rem;
  }

  .hero {
    box-sizing: border-box;
    max-width: 480px;
    max-height: 0;
    padding: 30% 0 70% 0;
    width: 100%;

    h1 {
      margin: 0;
      height: 0;
      font-size: 2rem;
      padding: 0 5%; // 16px padding, 16 / 320 = 0.05
      color-scheme: dark; // Prevent unreadable headers
      color: rgb(var(--fg));
    }
  }
</style>

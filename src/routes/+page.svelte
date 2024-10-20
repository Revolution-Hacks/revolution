<script>
  import DoubleArrow from '$lib/images/doublearrow.svg?component';
  import Gear from '$lib/images/gear.svg?component';
  import { enhance } from '$app/forms';
  import Arrow from '$lib/images/arrow.svg?component';
</script>

<svelte:head>
  <title>Revolution 2025</title>
  <meta
    name="description"
    content="Revolution is a UK hackathon taking place sometime next year. We'd love to see you there!"
  />
</svelte:head>

{#snippet email()}
  <form action="/email" method="post" class="email-form">
    <div class="inputs">
      <label>
        <span class="email-label">Your email:</span>
        <input type="email" placeholder="hello@revohacks.com" name="email" autocomplete="email" required />
      </label>
      <button type="submit" aria-label="Submit"><Arrow class="arrow" /></button>
    </div>
    <aside>
      We'll only send you an email when something big happens.<br />
      By submitting, you agree to our <a href="/privacy">privacy policy</a>.
    </aside>
  </form>
{/snippet}

<main>
  <div class="first-screen">
    <div class="first-screen-content">
      <DoubleArrow class="logo" />
      <h1 class="header">Revolution</h1>

      <div class="content">
        <p class="hero">
          Revolution is an Industrial Revolution themed hackathon in the UK taking place sometime next year. We'd love
          to see you there!
        </p>
        <br />
        <p class="email-title">Find out when sign-ups open:</p>
        {@render email()}
      </div>
    </div>
    <div class="track"></div>
    <div class="track-bridge"></div>
    <div class="gear first">
      <Gear />
    </div>
    <div class="gear second">
      <Gear />
    </div>
    <div class="gear third">
      <Gear />
    </div>
  </div>

  <div class="info-card">
    <h2>What is a hackathon?</h2>
    <p>A hackathon is where teenagers come together to build a project and share them with the world!</p>
  </div>

  <div class="info-card">
    <h2>Who is Revolution for?</h2>
    <p>Revolution is for teenagers under 18 and is <strong>completely free to attend</strong>.</p>
  </div>

  <div class="info-card">
    <h2>How can I sign up?</h2>
    <p>Get updates about Revolution and receive an email when we open our sign-up form:</p>
    <br />
    {@render email()}
  </div>
</main>

<style lang="scss">
  @use 'src/lib/style';

  main {
    display: flex;
    flex-direction: column;
    padding-bottom: 4em;
    gap: 4em;
  }

  // Decorative elements
  .first-screen {
    position: relative;
    min-height: 100vh;
    overflow-x: clip;

    .track {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) translateX(-4em) rotate(-60deg);
      background: repeat space url('$lib/textures/track.svg') left/8em;
      height: 18em;
      width: max(200vw, 200vh);
    }

    .track-bridge {
      display: none;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) translateX(-4em) rotate(20deg);
      height: 12em;
      width: max(200vw, 200vh);

      @include style.brick-texture(repeat space url('$lib/textures/track.svg') left/8em);

      @media (min-width: style.$size_sm) {
        display: block;
      }
    }

    .gear {
      position: absolute;
      animation: 120s linear infinite rotate;
      height: 24em;
      aspect-ratio: 1;

      :global(svg) {
        width: 100%;
        height: 100%;
      }

      :global(path) {
        fill: rgb(var(--extra-dim));
      }

      &.first {
        display: none;
        top: 50%;
        right: calc(0% - 4em);
        --transform: translate(50%, -100%);
      }

      &.second {
        bottom: 50%;
        right: 0%;
        animation-direction: reverse;
        --transform: translate(50%, 100%);
      }

      &.third {
        display: none;
        bottom: 0%;
        left: 0%;
        --transform: translate(-50%, 25%);
      }

      @media (min-width: style.$size_md) {
        height: 36em;

        &.first,
        &.third {
          display: block;
        }
      }
    }
  }

  // Title card content
  .first-screen-content {
    position: absolute;
    width: 100%;
    height: 75%;
    z-index: 100;
    display: grid;
    grid-template-columns: auto min-content;
    grid-template-rows: min-content min-content;
    justify-content: center;
    align-content: center;
    padding: 4em;
    gap: 1em;
    line-height: 1.2;

    :global(.logo) {
      /* I'm not sure why this is needed. Maybe because it's another component */
      grid-area: 1 / 1 / 1 / 1;
      width: 3em;
      height: 3em;
      align-self: center;
    }

    .header {
      grid-area: 1 / 2 / 1 / 2;
      font-size: 3em;
      min-width: max-content;
    }

    .content {
      display: grid;
      grid-area: 2 / 1 / 2 / end;

      .hero {
        font-size: 1.5em;
      }

      .email-title {
        font-weight: bold;
        margin-bottom: 0.5em;
      }
    }

    @media (min-width: style.$size_sm) {
      :global(.logo) {
        width: 6em;
        height: 6em;
      }

      .header {
        grid-area: 1 / 2 / 1 / 2;
        font-size: 6em;
        min-width: max-content;
        padding-right: 4rem;
      }

      .content {
        display: grid;
        grid-area: 2 / 2 / 2 / 2;
      }
    }
  }

  // Ensure everything is on top of the background content
  main > :not(:first-child) {
    position: relative;
    z-index: 2;
  }

  // Information card styles
  .info-card {
    margin: auto;
    max-width: calc(100vw - 4em);
    width: 64em;
    padding: 2em 2em;

    @include style.box-texture('$lib/textures/containerbox.svg');
  }

  /*
  main > .info-card:nth-child(odd) {
      text-align: right;
  }
  */

  // Email form
  .email-form {
    display: flex;
    flex-direction: column;
    gap: 0.5em;

    .inputs {
      display: flex;
      flex-direction: row;
      gap: 0.5em;
      align-items: flex-end;
      max-width: 100%;

      label {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        font-weight: 500;
        max-width: 24em;
        min-width: 0;
        flex: 1 1 0;
        color: inherit;

        // If the below hack stops working, at least make the box still accessible
        color-scheme: dark;

        input {
          font-weight: 600;
          background: none;
          padding: 0 1em 0 2em;
          height: 3em;
          color: inherit;
          min-width: 0;

          @include style.hover;
          @include style.box-texture('$lib/textures/inputbox.svg');

          &::placeholder {
            color: inherit;
            opacity: 0.8;
            font-weight: 500;
          }

          &:-webkit-autofill {
            // Ugly hack:
            // the browser sets background-color: <something> !important
            // and we can't override that in the normal way
            // so just make the transition so slow it basically does not do anything
            transition:
              background-color 0s 31536000s,
              // = 1 year
              color 0s 31536000s !important;
          }
        }
      }

      button {
        min-height: 3em;
        min-width: 3em;
        background: none;
        flex: 0 0 3em;
        @include style.box-texture('$lib/textures/inputbox.svg');
        @include style.hover;

        :global(.arrow) {
          margin: auto;

          :global(path) {
            fill: var(--fg);
          }
        }
      }
    }

    aside {
      opacity: 0.9;
      font-size: 0.9em;
    }
  }
</style>

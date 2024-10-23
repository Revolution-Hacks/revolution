<script>
  import DoubleArrow from '$lib/images/doublearrow.svg?component';
  import Gear from '$lib/images/gear.svg?component';
  import Arrow from '$lib/images/arrow.svg?component';
  import SocialMediaCard from '$lib/images/social-media-card.png?url';
</script>

<svelte:head>
  <title>Revolution 2025</title>
  <meta
    name="description"
    content="Revolution is a UK hackathon taking place sometime next year. We'd love to see you there!"
  />
  <meta name="og:image" content="{SocialMediaCard}">
</svelte:head>

{#snippet email()}
  <form action="/email" method="post" class="email-form" aria-label="Email signup form" name="Email signup form">
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
    <div class="track-container">
      <div class="train-track" style="--animation-delay: -10s;"></div>
      <div class="train-track reverse" style="--animation-delay: 5s;"></div>
    </div>
    <div class="track-bridge" style="--animation-delay: 10s;">
      <div class="train-track"></div>
    </div>
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

    .track-container {
      display: flex;
      flex-direction: column;
      gap: 2em;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) translateX(-4em) rotate(-60deg);
      height: 18em;
      width: max(200vmax, 600em);
    }

    .track-bridge {
      display: none;
      flex-direction: column;
      justify-content: center;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) translateX(-4em) rotate(20deg);
      height: 12em;
      width: max(200vmax, 600em);
      box-shadow: 4px 8px 8px 0 rgba(0, 0, 0, 0.2);

      @include style.brick-texture;

      @media (min-width: style.$size_sm) {
        display: flex;
      }
    }
    
    .train-track {
      position: relative;
      height: 8em;
      
      &::before, &::after {
        position: absolute;
        display: block;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      
      &::before {
        background: repeat space url('$lib/textures/track.svg') left/8em;
      }
      
      &::after {
        // 149em comes from 2388px (width of SVG) / 16px
        background: no-repeat space url('$lib/images/train.svg') left/149em;
        animation: 30s linear infinite train;
        animation-delay: var(--animation-delay);
      }
      
      &.reverse::after {
        transform: rotate(0.5turn);
      }
      
      @keyframes train {
        from {
          background-position-x: -450%;
        }
        
        to {
          background-position-x: 550%;
        }
      }
      
      @media (prefers-reduced-motion) {
        display: none;
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
        filter: drop-shadow(4px 8px 8px rgba(0, 0, 0, 0.2));
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
      
      @media (prefers-reduced-motion) {
        animation: none;
      }
    }
  }

  // Title card content
  .first-screen-content {
    position: relative;
    z-index: 100;
    display: grid;
    grid-template-columns: auto min-content;
    grid-template-rows: min-content min-content;
    justify-content: center;
    align-content: center;
    padding: 8em 4em;
    margin: auto;
    gap: 1em;

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
      line-height: 1em;
      min-width: max-content;
    }

    .content {
      display: grid;
      grid-area: 2 / 1 / 2 / end;

      .hero {
        font-size: 1.5em;
        line-height: 1.2em;
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
    box-shadow: 4px 8px 8px 0 rgba(0, 0, 0, 0.2);

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

  // 1.4.12 Text Spacing - Level AA
  /*
  :global(*) {
    line-height: 1.5 !important;
    word-spacing: 0.16em !important;
  }
  
  :global(p) {
    margin: 2em 0 !important;
  }
  */
</style>

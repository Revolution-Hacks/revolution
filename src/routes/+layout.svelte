<script>
  import DoubleArrow from '$lib/images/doublearrow.svg?component';
  import fonts from '$lib/fonts.css?url';
  import Gear from '$lib/images/gear.svg?component';
</script>

<svelte:head>
  <noscript><link rel="stylesheet" href={fonts} /></noscript>
  <!-- See app.html -->
  <link rel="preload" as="style" href={fonts} id="font-preload" />

  <meta name="theme-color" content="#2C1B10" />
</svelte:head>

<slot />

<footer>
  <div class="wall-top"></div>
  <div class="grid">
    <DoubleArrow class="logo" />
    <a class="header" href="/">Revolution</a>
    <div class="content">
      <ul>
        <li><a href="https://hackclub.com/slack/">Hack Club Slack (talk to us!)</a></li>
        <li><a href="https://github.com/Revolution-Hacks/revolution">Source code</a></li>
        <li><a href="https://hcb.hackclub.com/revolution">Financials</a></li>
        <li><a href="/safeguarding">Safeguarding</a></li>
        <li><a href="mailto:hello@revohacks.com">Email us</a></li>
      </ul>

      <p>
        Revolution is fiscally sponsored by The Hack Foundation (d.b.a Hack Club), a 501(c)(3) nonprofit (EIN:
        81-2908499). Revolution is not an official Hack Club event. Use of Hack Club branding does not constitute an
        endorsement, implied or otherwise, of Revolution by Hack Club.
      </p>
    </div>
  </div>
  <Gear class="gear" />
</footer>

<style lang="scss">
  @use 'src/lib/style';

  @font-face {
    font-family: 'Revolution Sans Title';
    font-display: block;
    src: url('$lib/fonts/DMSans.title.woff2'), local('DM Sans');
  }

  @font-face {
    font-family: 'Revolution Sans ASCII';
    font-display: block;
    src: url('$lib/fonts/DMSans.text.woff2'), local('DM Sans');
  }

  // Global font styles
  :global(:root) {
    font-family: 'Revolution Sans ASCII', 'Revolution Sans', 'system-ui', 'sans-serif';
    color: rgb(var(--fg));

    // WebKit does this for some reason
    font-synthesis: none;

    // Scrollbar
    color-scheme: dark;
  }

  @keyframes -global-rotate {
    from {
      transform: var(--transform) rotate(0turn);
    }

    50% {
      transform: var(--transform) rotate(0.5turn);
    }

    to {
      transform: var(--transform) rotate(1turn);
    }
  }

  // Main element brick texture
  :global(main) {
    min-height: calc(100vh - 4em);
    overflow: clip;

    @include style.brick-texture(var(--overlay-brick));
  }

  // Footer styles
  footer {
    position: relative;
    min-width: 100vw;
    min-height: 24em;
    padding: 4em 2em;
    padding-bottom: 286px;
    overflow: clip;
    box-shadow: 0 -0.5em 1em rgba(0, 0, 0, 50%);

    @include style.brick-texture(var(--overlay-brick), var(--overlay-brick), var(--overlay-brick));

    // Decorative elements
    :global(.gear) {
      position: absolute;
      right: 0;
      bottom: 0;
      --transform: translate(calc(50% - 8em), calc(50% - 2em)) scale(0.5);
      animation: 120s linear infinite rotate;

      :global(path) {
        fill: rgb(var(--extra-dim));
      }

      @media (min-width: style.$size_md) {
        --transform: translate(calc(50% - 8em), calc(50% - 2em));
      }
    }

    .wall-top {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2em;
      width: auto;
      box-shadow: 0 0 1em rgba(0, 0, 0, 50%);

      @include style.brick-texture();
    }

    @media (min-width: style.$size_sm) {
      padding: 4em;
    }

    // Content
    .grid {
      display: grid;
      max-width: 64em;
      width: 50%;
      grid-template-columns: min-content auto;
      grid-template-rows: min-content min-content;
      gap: 1em;

      :global(.logo) {
        grid-area: 1 / 1 / 1 / 1;
        width: 3em;
        height: 3em;
        align-self: center;
      }

      .header {
        font-family: 'Revolution Sans Title', 'Revolution Sans ASCII', 'Revolution Sans', system-ui, sans-serif;
        font-weight: bold;
        grid-area: 1 / 2 / 1 / 2;
        font-size: 3em;
        min-width: max-content;
        text-decoration: none;
      }

      .content {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        grid-area: 2 / 1 / 2 / end;

        ul {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin: 0;
          padding: 0;
          font-weight: 500;
          font-size: 1.2em;
          list-style-type: none;
        }
      }
    }
  }

  // Global header styles
  :global(h1) {
    font-family: 'Revolution Sans Title', 'Revolution Sans ASCII', 'Revolution Sans', system-ui, sans-serif;
  }

  :global(h1, h2, h3, h4, h5, h6) {
    font-variation-settings: 'opsz' 40;
    font-weight: bolder;
    font-size: inherit;
  }

  :global(h1) {
    font-size: 2em;
  }

  :global(h2) {
    font-size: 1.5em;
  }

  :global(h3) {
    font-size: 1.3em;
  }

  :global(h4) {
    font-size: 1.2em;
  }

  @media (min-width: 640px) {
    :global(h1) {
      font-size: 3em;
    }

    :global(h2) {
      font-size: 2em;
    }

    :global(h3) {
      font-size: 1.8em;
    }

    :global(h4) {
      font-size: 1.5em;
    }
  }

  @media (min-width: 1024px) {
    :global(h1) {
      font-size: 4em;
    }

    :global(h2) {
      font-size: 2em;
    }

    :global(h3) {
      font-size: 1.5em;
    }

    :global(h4) {
      font-size: 1.3em;
    }
  }

  // CSS reset
  :global(html, body) {
    padding: 0;
    margin: 0;
    overflow-x: clip;
  }

  :global(*, ::before, ::after) {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: black;
  }

  :global(img, svg, video, canvas, audio, iframe, embed, object) {
    display: block;
  }

  :global(a, :visited) {
    color: inherit;
    text-decoration: underline dotted;
  }

  :global(img, video) {
    max-width: 100%;
    height: auto;
  }

  :global(blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre) {
    margin: 0;
    padding: 0;
  }

  :global(input, button) {
    font-family: inherit;
    font-size: 1em;
    /* background: rgb(var(--fg)); */
    /* color: rgb(var(--bg)); */
  }
</style>

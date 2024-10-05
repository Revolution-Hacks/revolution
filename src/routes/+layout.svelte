<script>
  import fonts from '$lib/fonts.css?url';
  import Gear from '$lib/images/gear.svg?component';
</script>

<svelte:head>
  <noscript><link rel="stylesheet" href={fonts} /></noscript>
  <link rel="preload" as="style" href={fonts} id="font-preload" />
</svelte:head>

<slot />

<footer>
  <div class="wall-top"></div>
  <b>Revolution</b>
  <ul>
    <li><a href="https://hackclub.com/slack/">Talk to us on the Hack Club Slack</a></li>
    <li><a href="https://github.com/Revolution-Hacks/revolution">View this page's source code</a></li>
  </ul>
  <Gear class="gear" />
</footer>

<style lang="scss">
  @use 'src/lib/style';

  @font-face {
    font-family: 'Revolution Sans Title';
    display: swap;
    src: url('$lib/fonts/DMSans.title.woff2'), local('DM Sans');
  }

  @font-face {
    font-family: 'Revolution Sans ASCII';
    display: swap;
    src: url('$lib/fonts/DMSans.text.woff2'), local('DM Sans');
  }

  :global(:root) {
    font-family: 'Revolution Sans ASCII', 'Revolution Sans', 'system-ui', 'sans-serif';

    --fg: 216, 209, 204;
    --container: 73, 57, 47;
    --dim: 182, 168, 158;
    --extra-dim: 103, 77, 59;

    --overlay-brick: linear-gradient(rgba(21, 8, 2, 25%), rgba(21, 8, 2, 25%));
    --overlay-brick-light: linear-gradient(rgba(182, 168, 158, 25%), rgba(182, 168, 158, 25%));

    color: rgb(var(--fg));
  }

  :global(main) {
    min-height: calc(100vh - 4em);

    @include style.brick-texture(var(--overlay-brick));
  }

  /* Footer */

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

  footer {
    position: relative;
    min-width: 100vw;
    min-height: 24em;
    padding: 4em 2em;
    overflow: clip;
    box-shadow: 0 -0.5em 1em rgba(0, 0, 0, 50%);

    @include style.brick-texture(var(--overlay-brick), var(--overlay-brick), var(--overlay-brick));

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
  }

  /* Headers */

  :global(h1, h2, h3, h4, h5, h6) {
    font-family: 'Revolution Sans Title', 'Revolution Sans ASCII', 'Revolution Sans', system-ui, sans-serif;
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

  /* Screw browser stylesheets */

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

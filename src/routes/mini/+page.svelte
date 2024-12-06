<script>
  import Page from '$lib/components/Page.svelte';
  import DoubleArrow from '$lib/images/doublearrow.svg?component';
  import Gear from '$lib/images/gear.svg?component';
</script>

<Page title="mini" inverted>
  <div class="first-screen">
    <div class="first-screen-content">
      <DoubleArrow class="logo" />
      <h1 class="header">Revolution<br /><span class="mini">mini</span></h1>

      <div class="content">
        <p class="hero">We're hosting a small event in London lorem ipsum sit dolor amet I hate web development</p>
        <br />
        <a href="https://revolution.fillout.com/mini" class="style-button">Sign Up Yes Do It Now Right Away Immediately</a>
      </div>
    </div>

    <div class="gear first">
      <Gear />
    </div>
    <div class="gear second">
      <Gear />
    </div>
  </div>

  <div class="info-container">
    <div class="info-card">
      <h2>What?</h2>

      <p>i am pissing myself</p>
      <p>i am pissing myself</p>
    </div>
    <div class="info-card">
      <h2>What?</h2>

      <p>i am pissing myself</p>
    </div>
    <div class="info-card">
      <h2>What?</h2>

      <p>i am pissing myself</p>
    </div>
    <div class="info-card">
      <h2>What?</h2>

      <p>i am pissing myself</p>
    </div>
    <div class="info-card">
      <h2>What?</h2>

      <p>i am pissing myself</p>
    </div>
    <div class="info-card">
      <h2>What?</h2>

      <p>i am pissing myself</p>
    </div>
    <div class="info-card">
      <h2>What?</h2>

      <p>i am pissing myself</p>
    </div>
    <div class="info-card">
      <h2>What?</h2>

      <p>i am pissing myself</p>
    </div>
    <div class="info-card">
      <h2>What?</h2>

      <p>i am pissing myself</p>
    </div>
    
  </div>
</Page>

<style lang="scss">
  @use 'src/lib/style';

  .first-screen {
    z-index: 0;

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
        top: 70%;
        right: calc(0% - 4em);
        --transform: translate(50%, -100%);
      }

      &.second {
        bottom: 20%;
        left: 0%;
        --transform: translate(-50%, 25%);
      }

      @media (prefers-reduced-motion) {
        animation: none;
      }
    }

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

        .mini {
          display: block;
          text-align: left;
          line-height: 0.7em;
          font-size: 0.5em;
        }
      }

      .content {
        display: grid;
        grid-area: 2 / 1 / 2 / end;

        .hero {
          font-size: 1.5em;
          line-height: 1.2em;
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
  }

  .info-container {
    display: flex;
    flex-flow: wrap;
    gap: 1em;
    z-index: 5;

    .info-card {
      flex: auto;
      flex-basis: 16em;
      margin: auto;
      max-width: calc(100vw - 4em);
      width: 64em;
      padding: 2em 2em;
      box-shadow: 4px 8px 8px 0 rgba(0, 0, 0, 0.2);
      height: 32em;
      
      @include style.box-texture('$lib/textures/containerbox.svg');
    }
  }
</style>

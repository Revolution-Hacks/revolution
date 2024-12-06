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
        <p class="hero">We're hosting a small hackathon in London on <strong>January 4th</strong></p>
        <br />
        <a href="https://revolution.fillout.com/mini" target="_blank" class="style-button">Sign up</a>
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
      <h2>Where is it?</h2>
      <p>We don't know yet, but we're looking at venues in London Zones 1-3. We'll let you know as soon as we have a confirmed venue.</p>
    </div>
    <div class="info-card">
      <h2>When is it?</h2>
      <p>January 4th, 2025. The exact times will depend on the venue, but will be roughly 9am-5pm.</p>
    </div>
    <div class="info-card">
      <h2>What can I build?</h2>
      <p>Anything! As long as it follows the theme that is.</p>
    </div>
  <div class="info-card">
    <h2>What do I need to bring?</h2>
    <p>Yourself, a photo ID (student ID card is fine!), a smile, and your laptop! Food and drink will be provided.</p>
  </div>
  <div class="info-card">
    <h2>How much does it cost?</h2>
    <p>Revolution (mini) is free to attend! You will need to pay for transport though.</p>
  </div>
  <div class="info-card">
    <h2>What about allergies?</h2>
    <p>If you have allergies or other medical conditions, let us know on the signup form and we'll do our best to accomodate them.</p>
  </div>
  <div class="info-card">
    <h2>What is the theme?</h2>
    <p>You'll find out on the day! We're not spoiling it for you, but it may be somewhat related to the Industrial Revolution. 👀</p>
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

      @keyframes logo-a {
        0% {
          stroke-dasharray: 0 100;
        }
        
        20% {
          stroke-dasharray: 100 100;
        }
        
        100% {
          stroke-dasharray: 100 100;
        }
      }
      
      @keyframes logo-b {
        0% {
          stroke-dasharray: 0 100;
        }
        
        20% {
          stroke-dasharray: 0 100;
        }
        
        100% {
          stroke-dasharray: 100 100;
        }
      }
  
      :global(.logo) {
        /* I'm not sure why this is needed. Maybe because it's another component */
        grid-area: 1 / 1 / 1 / 1;
        width: 3em;
        height: 3em;
        align-self: center;
        
        stroke: rgb(var(--fg));
      }
      
      :global(.logo .a) {
        stroke-dasharray: 0 100;
        animation: 1s cubic-bezier(.05,.09,.23,1) logo-a forwards;
        animation-delay: 200ms;
      }
      
      :global(.logo .b) {
        stroke-dasharray: 0 100;
        animation: 1s cubic-bezier(.05,.09,.23,1) logo-b forwards;
        animation-delay: 200ms;
      }
      
      @media (prefers-reduced-motion) {
        :global(.logo .a), :global(.logo .b) {
          animation: none;
          stroke-dasharray: 100 100;
        }
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
      height: 16em;
      
      @include style.box-texture('$lib/textures/containerbox.svg');
    }
  }
</style>

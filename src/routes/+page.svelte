<script>
  import DoubleArrow from '$lib/images/doublearrow.svg?component';
  import Gear from '$lib/images/gear.svg?component';
</script>

<svelte:head>
  <title>Revolution 2025</title>
  <meta name="description" content="Revolution is a UK hackathon taking place sometime next year. We'd love to see you there!">
</svelte:head>

<main>
  <div class="first-screen">
    <div class="first-screen-content">
      <DoubleArrow class="logo" />
      <h1 class="header">Revolution</h1>
      
      <div class="content">
        <p>Revolution is a UK hackathon taking place sometime next year. We'd love to see you there!</p>
        
        <!--
        <p>Get updates from Revolution:</p>
        <label for="email">Your email:</label>
        <input id="email" type="email" />
        <aside>By submitting, you agree to our <a href="/privacy">privacy policy</a>.</aside>
        -->
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
</main>

<style lang="scss">
  @use "src/lib/style";
  
  // Decorative elements
  .first-screen {
    position: relative;
    min-height: 100vh;
    overflow: clip;
    
    .track {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) translateX(-4em) rotate(-60deg);
      background: repeat space url("$lib/textures/track.svg") left/8em;
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
      
      @include style.brick-texture(repeat space url("$lib/textures/track.svg") left/8em);
      
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
        
        &.first, &.third {
          display: block;
        }
      }
    }
  }
  
  // Actual content
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
    
    :global(.logo) {   /* I'm not sure why this is needed. Maybe because it's another component */
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
      font-size: 1.5em;
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
      }
      
      .content {
        display: grid;
        grid-area: 2 / 2 / 2 / 2;
        font-size: 1.5em;
      }
    }
  }
</style>
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
</main>

<style lang="scss">
  @use "src/lib/style";
  
  .first-screen {
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
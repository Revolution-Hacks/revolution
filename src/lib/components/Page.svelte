<script lang="ts">
  let { title, children, inverted = false } = $props();
</script>

<svelte:head>
  <title>{title} | Revolution</title>
</svelte:head>

<main class:inverted={inverted}>
  <div class="content">
    {@render children?.()}
  </div>
</main>

<style lang="scss">
  @use 'src/lib/style';
  
  .content {
    margin: auto;
    padding: 4em 2em;
    width: 64em;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }
  
  .inverted {
    filter: #{"grayscale(50%) invert()"};
  }
  
  main :global(button), main :global(.style-button) {
    height: 3em;
    padding: 0 2em;
    color: rgb(var(--fg));
    font-weight: 500;
    background: none;

    @include style.hover;
    @include style.box-texture('$lib/textures/inputbox.svg');
  }
</style>

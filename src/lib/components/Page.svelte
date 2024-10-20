<script>
  export let title;
</script>

<svelte:head>
  <title>{title} | Revolution</title>
</svelte:head>

<main>
  <div class="content">
    <slot />
  </div>
</main>

<style lang="scss">
  .content {
    margin: auto;
    padding: 4em;
    width: 64em;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }
</style>

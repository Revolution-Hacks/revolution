<script lang="ts">
  let { title, children } = $props();
</script>

<svelte:head>
  <title>{title} | Revolution</title>
</svelte:head>

<main>
  <div class="content">
    {@render children?.()}
  </div>
</main>

<style lang="scss">
  .content {
    margin: auto;
    padding: 4em 2em;
    width: 64em;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }
</style>

<script>
  import { page } from '$app/stores';
</script>

<main>
  <div class="error-message">
    <h1>{$page.status}: {$page.error?.message}</h1>
    {#if $page.status === 404}
      <p>We couldn't find that page. If you typed in a URL check to see if it is correct.</p>
    {:else}
      <p>Something went wrong. Try again?</p>
    {/if}

    <a href="/">Go to the homepage</a>
  </div>
</main>

<style lang="scss">
  .error-message {
    margin: auto;
    padding-top: 8em;
    width: min-content;
    display: flex;
    flex-direction: column;
    gap: 0.5em;

    h1 {
      width: max-content;
    }
  }
</style>

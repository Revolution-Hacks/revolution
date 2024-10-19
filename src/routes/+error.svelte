<script>
  import { page } from '$app/stores';
  import Page from '$lib/components/Page.svelte';
</script>

<Page>
  <div class="error-message">
    <h1>{$page.status}: {$page.error?.message}</h1>
    {#if $page.status === 404}
      <p>We couldn't find that page. If you typed in a URL check to see if it is correct.</p>
    {:else}
      <p>Something went wrong. Try again?</p>
    {/if}

    <a href="/">Go to the homepage</a>
  </div></Page
>

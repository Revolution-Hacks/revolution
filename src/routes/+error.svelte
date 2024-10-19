<script>
  import { page } from '$app/stores';
  import Page from '$lib/components/Page.svelte';
</script>

<Page>
  <div class="error-message">
    {#if $page.status === 404}
      <h1>We couldn't find that one</h1>
      <p>This page does not exist. If you typed in a URL check to see if it is correct.</p>
    {:else if $page.status === 400}
      <h1>Bad request</h1>
      <p>You may have entered in wrong information or the link you followed has expired. Try again?</p>
    {:else if $page.status >= 400 && $page.status < 500}
      <h1>Client error:<br />{$page.status} {$page.error?.message}</h1>
      <p>Something went wrong. Try again?</p>
    {:else if $page.status >= 500 && $page.status < 600}
      <h1>Server error:<br />{$page.status} {$page.error?.message}</h1>
      <p>
        Something went wrong. Try again, and if the error persists, tell us what the error is and how you got here at <a
          href="mailto:hello@revohacks.com">hello@revohacks.com</a
        >.
      </p>
    {/if}

    <a href="/">Go to the homepage</a>
  </div>
</Page>

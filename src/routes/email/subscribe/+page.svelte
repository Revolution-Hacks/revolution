<script>
  import Page from '$lib/components/Page.svelte';
  import ErrorPage from '../../+error.svelte';
  import { page } from '$app/stores';
</script>

{#if $page.status === 200}
  <Page title="Thanks for subscribing">
    <h1>Thanks for subscribing</h1>
    <p>You'll now get emails from Revolution whenever something happens.</p>
    <a href="/">Go to the homepage</a>
  </Page>
{:else}
  <ErrorPage />
{/if}

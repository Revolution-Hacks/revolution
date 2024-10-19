<script>
  import Page from '$lib/components/Page.svelte';
  import ErrorPage from '../+error.svelte';
  import { page } from '$app/stores';
</script>

{#if $page.status === 200}
  <Page>
    <h1>Almost there</h1>
    <p>
      You'll get an email asking you to confirm that you want to get emails from us.
      <b>You must click the link in the email. You will not get emails from us if you don't.</b>
      Unsubscribe at any time using the link in any emails we send you.
    </p>
    <a href="/">Go to the homepage</a>
  </Page>
{:else}
  <ErrorPage />
{/if}


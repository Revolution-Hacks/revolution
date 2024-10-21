<script>
  import Page from '$lib/components/Page.svelte';
  import ErrorPage from '../../+error.svelte';
  import { page } from '$app/stores';
</script>

{#if $page.status === 200}
  <Page title="Confirm your email address">
    <h1>Just one more step</h1>
    <p>Just so we know it's you trying to subscribe, please click the button below to proceed.</p>
    <form method="POST">
      <button type="submit">Verify my email address</button>
    </form>
    <details>
      <summary>Why do I have to do this?</summary>
      Sometimes, software like an antivirus opens all links before you do to check that they are safe. We can't tell whether
      it's you that has clicked the link in the email or a robot. This is why you have to press the button to make sure it's
      you trying to subscribe.
    </details>
  </Page>
{:else}
  <ErrorPage />
{/if}

<style lang="scss">
  @use 'src/lib/style';

  form {
    margin: 1em 0;
  }

  button {
    height: 3em;
    padding: 0 2em;
    color: rgb(var(--fg));
    font-weight: 500;
    background: none;

    @include style.hover;
    @include style.box-texture('$lib/textures/inputbox.svg');
  }
</style>

<script>
  import Page from '$lib/components/Page.svelte';
  import { onMount } from 'svelte';
  
  let noscriptDiv = $state();
  let form = $state();
  
  onMount(() => {
    form.submit();
  })
</script>

<Page title="Confirm your email address">
  <noscript>
    <h1>Just one more step</h1>
    <p>Just so we know it's you trying to subscribe, please click the button below to proceed.</p>
    <!-- This must be @html, otherwise, it will be put into the CSS bundle which we don't want -->
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html `<style> .noscript { display: none } </style>`}
  </noscript>
  <div class="noscript" bind:this={noscriptDiv}>
    <h1>Please wait</h1>
    <p>We're confirming your e-mail address. If nothing happens within a few seconds, you can click the button below.</p>
  </div>
  <form method="POST" bind:this={form}>
    <button type="submit">Verify my email address</button>
  </form>
  <details>
    <summary>Why do I have to do this?</summary>
    Sometimes, software like an antivirus opens all links before you do to check that they are safe. We can't tell whether
    it's you that has clicked the link in the email or a robot. This is why you have to press the button to make sure it's
    you trying to subscribe.
  </details>
</Page>

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

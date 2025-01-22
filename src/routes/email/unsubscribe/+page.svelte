<script>
  import EmailLanding from '$lib/components/EmailLanding.svelte';
</script>

<EmailLanding title="Confirm you want to unsubscribe" buttonText="Unsubscribe">
  {#snippet noscriptBody()}
    <h1>Confirm your email address</h1>
    <p>To make sure it's you trying to subscribe, please click the unsubscribe button.</p>
  {/snippet}
  {#snippet scriptBody()}
    <h1>Please wait</h1>
    <p>
      We're confirming your email address. If nothing happens in a few seconds, try clicking the unsubscribe button.
    </p>
  {/snippet}
</EmailLanding>

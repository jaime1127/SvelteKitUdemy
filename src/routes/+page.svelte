<script>
  import { goto, beforeNavigate, afterNavigate } from "$app/navigation";
  import { Button } from "$lib/components";
  import { navigating } from "$app/stores";

  $: console.log($navigating);

  beforeNavigate((navigation) => {
    console.log("beforeNavigation", navigation);
  });

  afterNavigate((navigation) => {
    console.log("beforeNavigation", navigation);
  });
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<button
  on:click={() => {
    goto("/about");
  }}>Go To About</button
>

<Button />

<a href="/about">About</a>

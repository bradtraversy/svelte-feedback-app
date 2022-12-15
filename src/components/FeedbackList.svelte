<script lang="ts">
  import { writable } from "svelte/store";
  import FeedbackItem from "./FeedbackItem.svelte";
  import type { Store } from "./FeedbackStores";

  export let feedback: Store;
</script>

{#each $feedback as fb (fb.id)}
  <FeedbackItem item={fb} on:delete-feedback />
{/each}

<script lang="ts">
  import { scale } from "svelte/transition";
  import FeedbackItem from "./FeedbackItem.svelte";
  import type { StoreEntry } from "./FeedbackStores";
  import { FeedbackStore } from "./FeedbackStores";

  let feedback = Array<StoreEntry>();
  FeedbackStore.subscribe((data) => (feedback = data));
</script>

{#each feedback as fb (fb.id)}
  <div in:scale out:scale={{ duration: 500 }}>
    <FeedbackItem item={fb} on:delete-feedback />
  </div>
{/each}

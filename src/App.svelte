<script lang="ts">
  import FeedbackList from "./components/FeedbackList.svelte";
  import { FeedbackStore } from "./components/FeedbackStores";
  let feedback = FeedbackStore;

  function deleteFeedback(e: CustomEvent<Number>): void {
    feedback.update((itemsArray) =>
      itemsArray.filter((item) => item.id !== e.detail)
    );
  }
</script>

<main class="container">
  <FeedbackList {feedback} on:delete-feedback={deleteFeedback} />
</main>

<style></style>

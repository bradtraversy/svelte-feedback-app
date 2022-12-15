<script lang="ts">
  import { v4 as uuidv4 } from "uuid";
  import Card from "./Card.svelte";
  import Button from "./Button.svelte";
  import { ButtonType } from "./types";
  import type { Store } from "./FeedbackStores";
  import RatingSelect from "./RatingSelect.svelte";

  export let feedback: Store;

  let text = "";
  let btnDisabled = true;
  const MSG_MIN_LEN = 10;
  let message: string;
  let rating = 10;
  function handleInput() {
    if (text.trim().length < MSG_MIN_LEN) {
      message = `text must be at least ${MSG_MIN_LEN} characters`;
      btnDisabled = true;
    } else {
      message = "";
      btnDisabled = false;
    }
  }

  function handleSubmit(
    event: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement }
  ) {
    if (text.trim().length >= MSG_MIN_LEN) {
      const newFeedback = {
        id: uuidv4(),
        text,
        rating,
      };
      feedback.update((currentFeedback) => {
        return [newFeedback, ...currentFeedback];
      });
      text = "";
    }
  }

  function handleSelect(e: CustomEvent<number>): void {
    rating = e.detail;
  }
</script>

<Card>
  <header>
    <h2>How would you rate your service with us?</h2>
  </header>
  <form on:submit|preventDefault={handleSubmit}>
    <!--   RatingSelect -->
    <RatingSelect on:rating-select={handleSelect} />
    <div class="input-group">
      <input
        on:input={handleInput}
        bind:value={text}
        type="text"
        placeholder="Tell us what keeps you coming back"
      />
      <Button disabled={btnDisabled} type={ButtonType.submit}>Submit</Button>
    </div>
    {#if message}
      <div class="message">{message}</div>
    {/if}
  </form>
</Card>

<style>
  header {
    max-width: 400px;
    margin: auto;
  }
  header h2 {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }
  .input-group {
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 8px;
    margin-top: 15px;
  }
  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
  }
  input:focus {
    outline: none;
  }
  .message {
    padding-top: 10px;
    text-align: center;
    color: rebeccapurple;
  }
</style>

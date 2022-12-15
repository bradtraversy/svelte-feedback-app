<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Card from "./Card.svelte";
  import type { StoreEntry } from "./FeedbackStores";

  export let item: StoreEntry;

  const dispatch = createEventDispatcher();
  function handleDelete(id: number): void {
    dispatch("delete-feedback", id);
  }
</script>

<Card>
  <h2 class="num-display">{item.rating}</h2>
  <p>{item.text}</p>
  <p class="close" on:click={() => handleDelete(item.id)}>X</p>
</Card>

<style>
  .num-display {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 50px;
    height: 50px;
    background: #ff6a95;
    color: #fff;
    border: 1px #eee solid;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    font-size: 19px;
  }
  .close {
    border: 1px black solid;
    border-radius: 50%;
    position: absolute;
    top: -10px;
    width: 30px;
    right: -10px;
    cursor: pointer;
    background: white;
    text-align: center;
    font-size: 19px;
  }
</style>

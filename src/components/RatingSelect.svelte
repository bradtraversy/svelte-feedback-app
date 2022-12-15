<script lang="ts">
  import { createEventDispatcher } from "svelte";
  let selected = 10;
  const dispatch = createEventDispatcher<{ "rating-select": number }>();

  function onChange(
    e: Event & { currentTarget: EventTarget & HTMLInputElement }
  ): void {
    selected = Number(e.currentTarget.value);
    dispatch("rating-select", selected);
  }
</script>

<ul class="rating">
  {#each { length: 10 } as _, i}
    <li>
      <input
        type="radio"
        id={"num" + (i + 1)}
        name="rating"
        value={i + 1}
        on:change={onChange}
        checked={selected === i + 1}
      />
      <label for={"num" + (i + 1)}>
        {i + 1}
      </label>
    </li>
  {/each}
</ul>

<style>
  .rating {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 30px 0;
  }
  .rating li {
    position: relative;
    background: #f4f4f4;
    width: 50px;
    height: 50px;
    padding: 10px;
    text-align: center;
    border-radius: 50%;
    font-size: 19px;
    border: 1px #eee solid;
    transition: 0.3s;
  }
  .rating li label {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
  .rating li:hover {
    background: #ff6a95;
    color: #fff;
  }
  /* Make actual radio select invisible */
  [type="radio"] {
    opacity: 0;
  }
  /* Use the sibling select */
  [type="radio"]:checked ~ label {
    background: #ff6a95;
    color: #fff;
  }
</style>

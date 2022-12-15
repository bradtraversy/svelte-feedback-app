<script lang="ts">
  import { ButtonType, StyleType } from "./types";

  export let style = StyleType.primary;
  export let type: ButtonType = ButtonType.button;
  export let disabled = false;
</script>

<button {type} {disabled} class={style}>
  <slot />
</button>

<style>
  button {
    color: #fff;
    border: 0;
    border-radius: 8px;
    color: #fff;
    width: 100px;
    height: 40px;
    cursor: pointer;
  }
  .primary {
    background-color: #202142;
  }
  .secondary {
    background: #ff6a95;
  }
  button:hover {
    transform: scale(0.98);
    opacity: 0.9;
  }
  button:disabled {
    background-color: #cccccc;
    color: #333;
    cursor: auto;
  }
  button:disabled:hover {
    transform: scale(1);
    opacity: 1;
  }
</style>

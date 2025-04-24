<script lang="ts">
  import { toastState } from "../../states/index.js"
  import Toast from "./Toast.svelte"
  import { flip } from "svelte/animate"
  import { fade, fly } from "svelte/transition"

  const _toastState = toastState()
</script>

<div class="toaster">
  {#each _toastState.data.toasts as toast (toast.id)}
    <span animate:flip={{ duration: 200 }} in:fly={{ x: 256 }} out:fade>
      <Toast {...toast} />
    </span>
  {/each}
</div>

<style>
  .toaster {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
</style>

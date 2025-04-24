<script lang="ts">
  import { toastState } from "../../states/index.js"
  import type { ToastType } from "../../types/index.js"
  import classMapUtil from "../../utils/classMapUtil.js"
  import { onDestroy, onMount } from "svelte"
  import type { HTMLAttributes } from "svelte/elements"

  interface Props
    extends HTMLAttributes<HTMLDivElement>,
      Omit<ToastType, "id"> {}

  let {
    class: className = "",
    message,
    duration = 3000,
    ...rest
  }: Props = $props()

  let timer: number

  const _toastState = toastState()

  onMount(() => {
    timer = setTimeout(() => {
      _toastState.clearWithDelay()
    }, duration)
  })

  onDestroy(() => {
    clearTimeout(timer)
  })
</script>

<div
  {...rest}
  class={classMapUtil({
    [className as string]: true,
    toast: true,
  })}
>
  {message}
</div>

<style>
  .toast {
    background: var(--color-secondary);
    color: #fff;
    padding: 0.875rem 1.25rem;
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
    font-weight: 500;
    box-shadow:
      0 4px 12px rgba(0, 0, 0, 0.15),
      0 0 0 1px rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(6px);
    border: 1px solid rgba(255, 255, 255, 0.06);
    animation: fadeInUp 0.5s ease-out forwards;
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>

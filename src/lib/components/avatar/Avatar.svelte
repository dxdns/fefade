<script lang="ts">
  import type { ClassValue, HTMLImgAttributes } from "svelte/elements"
  import classMapUtil from "../../utils/classMapUtil.js"
  import styles from "./Avatar.module.css"

  interface Props extends HTMLImgAttributes {
    class?: ClassValue
    textFallback?: string
  }

  let { class: className = "", textFallback, ...rest }: Props = $props()

  let hasError = $state(false)

  function handleError() {
    hasError = true
  }
</script>

<div
  class={classMapUtil({
    [styles.avatar]: true,
  })}
>
  {#if !hasError}
    <img
      class={classMapUtil({
        [className as string]: true,
      })}
      {...rest}
      onerror={handleError}
    />
  {:else if textFallback}
    <span class={styles.textFallback}>
      {textFallback.charAt(0).toUpperCase()}
    </span>
  {/if}
</div>

<script lang="ts">
  import type { ClassValue, HTMLImgAttributes } from "svelte/elements"
  import styles from "./Logo.module.css"
  import classMapUtil from "../../utils/classMapUtil.js"

  interface Props extends HTMLImgAttributes {
    class?: ClassValue
  }

  let { class: className = "", ...rest }: Props = $props()
</script>

<div
  class={classMapUtil({
    [className as string]: true,
    [styles.logo]: true,
  })}
>
  <img {...rest} alt="" />
  <h2>
    TE<span class="error">ST</span>
  </h2>
</div>

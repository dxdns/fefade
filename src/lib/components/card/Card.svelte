<script lang="ts">
  import type { HTMLAttributes, ClassValue } from "svelte/elements"
  import classMapUtil from "../../utils/classMapUtil.js"
  import styles from "./Card.module.css"

  interface Props extends HTMLAttributes<HTMLDivElement> {
    class?: ClassValue
  }

  let { class: className = "", children, ...rest }: Props = $props()
</script>

<div
  {...rest}
  class={classMapUtil({
    [className as string]: true,
    [styles.card]: true,
  })}
>
  {@render children?.()}
</div>

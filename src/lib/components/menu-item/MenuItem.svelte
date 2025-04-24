<script lang="ts">
  import type { ClassValue, HTMLAttributes } from "svelte/elements"
  import styles from "./MenuItem.module.css"
  import classMapUtil from "../../utils/classMapUtil.js"

  interface Props extends HTMLAttributes<HTMLDivElement> {
    class?: ClassValue
  }

  let { class: className = "", children, ...rest }: Props = $props()
</script>

<div
  {...rest}
  class={classMapUtil({
    [className as string]: true,
    [styles.menuItem]: true,
  })}
>
  {@render children?.()}
</div>

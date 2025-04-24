<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements"
  import styles from "./Badge.module.css"
  import type { SizeType, VariantType } from "../../types/index.js"
  import classMapUtil from "../../utils/classMapUtil.js"

  interface Props extends HTMLAttributes<HTMLSpanElement> {
    size?: SizeType
    variant?: VariantType
  }

  let {
    class: className = "",
    size = "sm",
    variant = "contained",
    children,
    ...rest
  }: Props = $props()
</script>

<span
  {...rest}
  class={classMapUtil({
    [className as string]: true,
    [styles[size]]: true,
    [styles[variant]]: true,
    [styles.badge]: true,
  })}
>
  {@render children?.()}
</span>

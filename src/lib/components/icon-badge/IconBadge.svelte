<script lang="ts">
  import type { HTMLButtonAttributes, ClassValue } from "svelte/elements"
  import classMapUtil from "../../utils/classMapUtil.js"
  import styles from "./IconBadge.module.css"
  import IconButton from "../icon-button/index.js"
  import Badge from "../badge/index.js"
  import type { ColorType } from "../../types/index.js"

  interface Props extends HTMLButtonAttributes {
    class?: ClassValue
    content: string
    bgColor?: ColorType
  }

  let {
    class: className = "",
    content,
    bgColor = "error",
    children,
    ...rest
  }: Props = $props()
</script>

<IconButton
  {...rest}
  class={classMapUtil({
    [className as string]: true,
    [styles.iconBadge]: true,
  })}
>
  <Badge
    class={classMapUtil({
      [`bg-${bgColor}`]: true,
      [styles.content]: true,
    })}>5</Badge
  >
  {@render children?.()}
</IconButton>

<script lang="ts">
  import type { HTMLButtonAttributes, ClassValue } from "svelte/elements"
  import classMapUtil from "../../utils/classMapUtil.js"
  import styles from "./IconButton.module.css"
  import Button from "../button/index.js"

  interface Props extends HTMLButtonAttributes {
    class?: ClassValue
  }

  let { class: className = "", children, ...rest }: Props = $props()
</script>

<Button
  {...rest}
  class={classMapUtil({
    [className as string]: true,
    [styles.iconButton]: true,
  })}
  variant="text"
  color={"inherit"}
>
  {@render children?.()}
</Button>

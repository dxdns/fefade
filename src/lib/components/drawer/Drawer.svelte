<script lang="ts">
  import type { Snippet } from "svelte"
  import type { ClassValue, HTMLAttributes } from "svelte/elements"
  import classMapUtil from "../../utils/classMapUtil.js"
  import styles from "./Drawer.module.css"
  import { clickOutsideAction, resizeAction } from "../../actions/index.js"

  interface Props extends HTMLAttributes<HTMLDivElement> {
    class?: ClassValue
    open: boolean
    onClose: () => void
    header: Snippet
    content: Snippet
  }

  let {
    class: className = "",
    open,
    onClose,
    header,
    content,
    ...rest
  }: Props = $props()
</script>

<div
  {...rest}
  use:clickOutsideAction={{ handler: onClose }}
  use:resizeAction={{
    handler: () => {
      if (window.innerWidth > 768) {
        onClose()
      }
    },
  }}
  class={classMapUtil({
    [className as string]: true,
    [styles.opened]: open,
    [styles.drawer]: true,
  })}
>
  {@render header()}
  <div class={styles.content}>
    {@render content()}
  </div>
</div>

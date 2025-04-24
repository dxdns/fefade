<script lang="ts">
  import type { ClassValue, HTMLAttributes } from "svelte/elements"
  import styles from "./Menu.module.css"
  import Card from "../card/index.js"
  import classMapUtil from "../../utils/classMapUtil.js"
  import { clickOutsideAction } from "../../actions/index.js"

  interface Props extends HTMLAttributes<HTMLDivElement> {
    class?: ClassValue
    opened: boolean
    onClose: () => void
  }

  let {
    class: className = "",
    opened,
    onClose,
    children,
    ...rest
  }: Props = $props()
</script>

<div
  {...rest}
  use:clickOutsideAction={{ handler: onClose }}
  class={classMapUtil({
    [className as string]: true,
    [styles.menu]: true,
  })}
>
  <Card
    class={classMapUtil({
      [styles.content]: true,
      [styles.show]: opened,
      [styles.hide]: !opened,
    })}
    onclick={onClose}
  >
    {@render children?.()}
  </Card>
</div>

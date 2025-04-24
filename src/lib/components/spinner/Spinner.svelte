<script lang="ts">
  import type { SizeType } from "../../types/index.js"
  import classMapUtil from "../../utils/classMapUtil.js"
  import type { HTMLAttributes } from "svelte/elements"
  import styles from "./Spinner.module.css"

  interface Props extends HTMLAttributes<HTMLSpanElement> {
    size?: SizeType
  }

  let { class: className = "", size = "sm", ...rest }: Props = $props()
</script>

<span
  class={classMapUtil({
    [className as string]: true,
    [styles[size]]: true,
    [styles.spinner]: true,
  })}
  {...rest}
></span>

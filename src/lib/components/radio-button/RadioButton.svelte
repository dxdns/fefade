<script lang="ts">
  import type { HTMLInputAttributes } from "svelte/elements"
  import styles from "./RadioButton.module.css"
  import type { SizeType } from "../../types/index.js"
  import classMapUtil from "../../utils/classMapUtil.js"

  interface Props extends Omit<HTMLInputAttributes, "size"> {
    size?: SizeType
  }

  let { class: className = "", size = "sm", ...rest }: Props = $props()
</script>

<label
  class={classMapUtil({
    [className as string]: true,
    [styles.radioButton]: true,
  })}
>
  <input {...rest} type="radio" />
  <div
    class={classMapUtil({
      [styles.circle]: true,
      [styles[size]]: true,
    })}
  ></div>
  {rest["aria-label"]}
</label>

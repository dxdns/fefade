<script lang="ts">
  import classMapUtil from "../../utils/classMapUtil.js"
  import styles from "./Checkbox.module.css"
  import type { HTMLInputAttributes } from "svelte/elements"
  import type { SizeType } from "../../types/index.js"

  interface Props extends Omit<HTMLInputAttributes, "size"> {
    size?: SizeType
  }

  let { class: className = "", size = "sm", ...rest }: Props = $props()
</script>

<label
  class={classMapUtil({
    [className as string]: true,
    [styles.checkbox]: true,
    ["text-muted"]: rest.disabled,
  })}
>
  <input {...rest} type="checkbox" />
  <div
    class={classMapUtil({
      [styles.wrapper]: true,
      [`box-${size}`]: true,
    })}
  >
    <div class={styles.bg}></div>
    <svg fill="none" viewBox="0 0 24 24" class={styles.icon}>
      <path
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-width="3"
        stroke="currentColor"
        d="M4 12L10 18L20 6"
        class={styles.checkPath}
      ></path>
    </svg>
  </div>
  {rest["aria-label"]}
</label>

<script lang="ts">
  import type { ClassValue, HTMLInputAttributes } from "svelte/elements"
  import classMapUtil from "../../utils/classMapUtil.js"
  import styles from "./InputNumber.module.css"
  import Button from "../button/index.js"

  interface Props extends HTMLInputAttributes {
    class?: ClassValue
    increment: () => void
    decrement: () => void
    disableIncrement?: boolean
    disableDecrement?: boolean
  }

  let {
    class: className = "",
    increment,
    decrement,
    disableIncrement = false,
    disableDecrement = false,
    ...rest
  }: Props = $props()
</script>

<div
  class={classMapUtil({
    [className as string]: true,
    [styles.inputNumber]: true,
  })}
>
  <div class={styles.numberControl}>
    <Button disabled={disableDecrement} onclick={decrement}>-</Button>
    <Button disabled={disableIncrement} onclick={increment}>+</Button>
  </div>
  <input {...rest} type="number" />
</div>

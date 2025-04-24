<script lang="ts">
  import type { HTMLButtonAttributes, ClassValue } from "svelte/elements"
  import classMapUtil from "../../utils/classMapUtil.js"
  import type { ColorType, VariantType } from "../../types/index.js"
  import Spinner from "../spinner/index.js"
  import styles from "./Button.module.css"

  interface Props extends HTMLButtonAttributes {
    class?: ClassValue
    variant?: VariantType
    bgColor?: ColorType
    isLoading?: boolean
  }

  let {
    class: className = "",
    variant = "contained",
    bgColor = "primary",
    isLoading,
    children,
    ...rest
  }: Props = $props()
</script>

<button
  class={classMapUtil({
    [className as string]: true,
    [styles[variant]]: true,
    [styles.button]: true,
    [`bg-${bgColor}`]: true,
  })}
  type={rest.type ?? "button"}
  {...rest}
>
  {#if isLoading}
    <Spinner />
  {:else}
    {@render children?.()}
  {/if}
</button>

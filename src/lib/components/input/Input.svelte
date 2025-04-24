<script lang="ts">
  import type { ClassValue, HTMLInputAttributes } from "svelte/elements"
  import classMapUtil from "../../utils/classMapUtil.js"
  import type { ColorType, VariantType } from "../../types/index.js"
  import styles from "./Input.module.css"
  import { observeAttributeAction } from "../../actions/index.js"

  interface Props extends HTMLInputAttributes {
    class?: ClassValue
    label?: string
    variant?: VariantType
    color?: ColorType
    focused?: boolean
  }

  let {
    class: className = "",
    label,
    variant = "outlined",
    color = "primary",
    focused = false,
    children,
    ...rest
  }: Props = $props()

  let el: HTMLInputElement

  let helperText = $state<string | null>(null)

  $effect(() => {
    if (focused) {
      el?.focus()
    }
  })
</script>

<div
  class={classMapUtil({
    [className as string]: true,
    [styles[variant]]: true,
    [color]: Boolean(color),
    [styles.inputGroup]: true,
    ["border-error"]: Boolean(helperText),
    [styles.helperTextVisible]: Boolean(helperText),
  })}
>
  <input
    {...rest}
    bind:this={el}
    use:observeAttributeAction={{
      attr: "data-error",
      updateValue: (value) => {
        helperText = value
      },
    }}
    class={classMapUtil({
      ["border-error"]: Boolean(helperText),
    })}
    placeholder={rest.type === "search" ? rest.placeholder : " "}
  />

  {#if label}
    <label for={rest.id || rest.name}>{label}</label>
  {/if}

  <!-- {#if variant === "outlined"}
    <fieldset>
      <legend>
        <span>{label}</span>
      </legend>
    </fieldset>
  {/if} -->

  {#if helperText}
    <span
      class={classMapUtil({
        [styles[variant]]: true,
        [styles.helper]: true,
        ["error"]: true,
      })}
    >
      {helperText}
    </span>
  {/if}
</div>

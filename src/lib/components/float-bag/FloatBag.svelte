<script lang="ts">
  import type { HTMLAttributes, ClassValue } from "svelte/elements"
  import classMapUtil from "../../utils/classMapUtil.js"
  import styles from "./FloatBag.module.css"
  import Button from "../button/index.js"

  interface Props extends HTMLAttributes<HTMLDivElement> {
    class?: ClassValue
    isDeliveryFree?: boolean
    price: number
    handleClick: () => void
    buttonText?: string
  }

  let {
    class: className = "",
    isDeliveryFree = false,
    price,
    handleClick,
    buttonText = "Ver sacola",
    children,
    ...rest
  }: Props = $props()
</script>

<div
  class={classMapUtil({
    [className as string]: true,
    [styles.floatBag]: true,
  })}
  {...rest}
>
  <div>
    <p>
      Total
      {#if isDeliveryFree}
        <span>com <strong>entrega grátis</strong></span>
      {/if}
    </p>
    <p>
      <strong>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price)}
      </strong>
      <span>/ 2 itens</span>
    </p>
  </div>
  <Button onclick={handleClick} bgColor="secondary">{buttonText}</Button>
</div>

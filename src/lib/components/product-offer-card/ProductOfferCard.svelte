<script lang="ts">
  import type { ClassValue, HTMLAttributes } from "svelte/elements"
  import Badge from "../badge/index.js"
  import Card from "../card/index.js"
  import styles from "./ProductOfferCard.module.css"
  import classMapUtil from "../../utils/classMapUtil.js"
  import type { ProductType } from "../../types/index.js"

  interface Props extends HTMLAttributes<HTMLDivElement> {
    class?: ClassValue
    data: Partial<ProductType>
  }

  let { class: className = "", data, ...rest }: Props = $props()

  const { image, title, description, price } = data
</script>

<Card
  {...rest}
  class={classMapUtil({
    [className as string]: true,
    [styles.productOfferCard]: true,
  })}
  aria-disabled={false}
>
  <div>
    <Badge size="md">Promoção</Badge>
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <h2>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(Number(price || 0))}
      </h2>
    </div>
  </div>
  <div>
    <img src={image} alt={title} />
  </div>
</Card>

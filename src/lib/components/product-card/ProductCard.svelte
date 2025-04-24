<script lang="ts">
	import type { ClassValue, HTMLAttributes } from "svelte/elements"
	import Card from "../card/index.js"
	import styles from "./ProductCard.module.css"
	import classMapUtil from "../../utils/classMapUtil.js"
	import type { ProductType } from "../../types/index.js"
	import { lazyLoadAction } from "../../actions/index.js"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		class?: ClassValue
		data: ProductType
	}

	let { class: className = "", data, children, ...rest }: Props = $props()

	const { image, title, description, price } = data
</script>

<Card
	{...rest}
	class={classMapUtil({
		[className as string]: true,
		[styles.card]: true
	})}
>
	<div class={styles.imageContainer}>
		<img
			use:lazyLoadAction={image}
			loading="lazy"
			decoding="async"
			class={styles.image}
			src={image}
			alt={title}
		/>
	</div>

	<h3 class={styles.title}>{title}</h3>
	<p class={styles.description}>{description}</p>
	<p class={styles.price}>
		{new Intl.NumberFormat("pt-BR", {
			style: "currency",
			currency: "BRL"
		}).format(price)}
	</p>
</Card>

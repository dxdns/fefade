<script lang="ts">
	import type { HTMLAttributes, ClassValue } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import styles from "./CardAnalytic.module.css"
	import Card from "../card/index.js"
	import type { SvelteComponent } from "svelte"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		class?: ClassValue
		icon?: typeof SvelteComponent
		title: string
		percent: number
		value: number
	}

	let {
		class: className = "",
		icon,
		title,
		percent,
		value,
		...rest
	}: Props = $props()

	const percentColor = percent >= 50 ? "success" : "error"
	const percentText = percent >= 50 ? `+${percent}%` : `-${percent}%`
</script>

<Card
	{...rest}
	class={classMapUtil({
		[className as string]: true,
		[styles.cardAnalytic]: true
	})}
>
	{#if icon}
		{@html icon}
	{/if}
	<div class={styles.right}>
		<div class="inherit">
			<h3>{title}</h3>
			<small class="text-muted">Last 24 hours</small>
		</div>
		<h5 class={percentColor}>{percentText}</h5>
		<h3>
			{new Intl.NumberFormat("pt-BR", {
				style: "currency",
				currency: "BRL"
			}).format(value)}
		</h3>
	</div>
</Card>

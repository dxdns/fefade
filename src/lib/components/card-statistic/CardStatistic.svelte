<script lang="ts">
	import type { HTMLAttributes, ClassValue } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import styles from "./CardStatistic.module.css"
	import Card from "../card/index.js"
	import ProgressCircle from "../progress-circle/index.js"
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
</script>

<Card
	{...rest}
	class={classMapUtil({
		[className as string]: true,
		[styles.cardSatistic]: true
	})}
>
	{#if icon}
		{@html icon}
	{/if}
	<div class={styles.middle}>
		<div class={styles.left}>
			<h3>{title}</h3>
			<h1>
				{new Intl.NumberFormat("pt-BR", {
					style: "currency",
					currency: "BRL"
				}).format(value)}
			</h1>
		</div>
		<ProgressCircle {percent} />
	</div>
	<small class="text-muted">Last 24 Hours</small>
</Card>

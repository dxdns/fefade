<script lang="ts">
	import type { HTMLButtonAttributes } from "svelte/elements"
	import { classMapUtil, mergeStyleUtil } from "@dxdns-kit/core/utils"
	import styles from "./Rating.module.css"

	interface Props extends HTMLButtonAttributes {
		startIn?: number
		color?: string
		onChange?: (stars: number) => void
	}

	let {
		class: className = "",
		startIn = 0,
		color = "#fde047",
		onChange,
		...rest
	}: Props = $props()
	let rating = $state(startIn)

	function handleClick(event: MouseEvent) {
		const target = event.currentTarget as HTMLElement
		const rect = target.getBoundingClientRect()
		const x = event.clientX - rect.left
		const width = rect.width

		const stars = (x / width) * 5
		rating = Math.round(stars * 2) / 2
		onChange?.(rating)
	}
</script>

<button
	{...rest}
	type="button"
	class={classMapUtil(className, [className, styles], styles.rating)}
	data-rating={rating}
	onclick={handleClick}
	aria-label="Rate with {rating} stars"
	style={mergeStyleUtil(
		`--star-color: ${color};`,
		`--rating-percent: ${Math.min(Math.max((rating / 5) * 100, 0), 100)}%;`,
		rest.style
	)}
></button>

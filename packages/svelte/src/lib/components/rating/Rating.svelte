<script lang="ts">
	import type { HTMLButtonAttributes } from "svelte/elements"
	import { classMapUtil, mergeStyleUtil } from "@feflow-ui/core/utils"
	import { StarIcon } from "../../icons/index.js"
	import styles from "./Rating.module.css"

	interface Props extends HTMLButtonAttributes {
		startIn?: number
		length?: number
		color?: string
		size?: string | number
		onChange?: (index: number) => void
	}

	let {
		class: className = "",
		startIn = 0,
		length = 5,
		color = "yellow",
		size = "24px",
		onChange,
		children,
		...rest
	}: Props = $props()

	let index = $state(startIn)
	let hoverIndex = $state(startIn)

	function handleChange(idx: number) {
		index = idx === index ? -1 : idx
		onChange?.(idx)
	}

	const style = mergeStyleUtil(
		"display: flex; align-items: flex-start;",
		`--color: ${color}`,
		rest.style
	)
</script>

<div class={className} {style}>
	{#each Array.from(Array(length)) as _, i (i)}
		{@const idx = i + 1}
		<button
			{...rest}
			style="all: unset; cursor: pointer;"
			onmouseenter={() => (hoverIndex = idx)}
			onmouseleave={() => (hoverIndex = 0)}
			onclick={() => {
				handleChange(idx)
			}}
		>
			<div
				class={classMapUtil(styles.icon, {
					[styles.active]: idx <= (hoverIndex || index)
				})}
			>
				{#if children}
					{@render children?.()}
				{:else}
					<StarIcon height={size} width={size} />
				{/if}
			</div>
		</button>
	{/each}
</div>

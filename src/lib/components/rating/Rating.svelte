<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import { classMapUtil, mergeStyleUtil } from "../../utils/index.js"
	import { StarIcon } from "../../icons/index.js"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		startIn?: number
		length?: number
		color?: string
		size?: string | number
		onChange?: (index: number) => void
	}

	let {
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

<div {style}>
	{#each Array.from(Array(length)) as _, i}
		{@const idx = i + 1}
		<button
			style="all: unset; cursor: pointer;"
			onmouseenter={() => (hoverIndex = idx)}
			onmouseleave={() => (hoverIndex = 0)}
			onclick={() => {
				handleChange(idx)
			}}
		>
			<div
				class={classMapUtil("icon", { active: idx <= (hoverIndex || index) })}
				style="--color: {color};"
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

<style>
	.icon {
		transition: color 0.3s ease;
	}

	.icon.active {
		color: var(--color);
	}

	@media (hover: hover) and (pointer: fine) {
		.icon:hover {
			color: var(--color);
		}
	}
</style>

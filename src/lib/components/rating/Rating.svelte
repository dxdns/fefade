<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"
	import { classMapUtil, mergeStyleUtil } from "../../utils/index.js"
	import { StarIcon } from "../../icons/index.js"

	interface Props extends Omit<HTMLInputAttributes, "size"> {
		startIn?: number
		stars?: number
		color?: string
		size?: string | number
	}

	let {
		class: className,
		startIn = 0,
		stars = 5,
		color = "yellow",
		size = "24px",
		...rest
	}: Props = $props()

	let index = $state(startIn)

	const style = mergeStyleUtil(
		"display: flex; align-items: center;",
		`--color: ${color}`,
		rest.style
	)
</script>

<div {style}>
	{#each Array.from(Array(stars)) as _, i}
		{@const idx = i + 1}
		<input
			{...rest}
			type="checkbox"
			id={rest.id ? `${rest.id}-${idx}` : `checkbox-${idx}`}
			hidden
			onchange={() => {
				index = idx === index ? -1 : idx
			}}
			style={undefined}
		/>
		<label
			for={rest.id ? `${rest.id}-${idx}` : `checkbox-${idx}`}
			style="cursor: pointer;"
		>
			<div class={classMapUtil({ ["active"]: idx <= index })}>
				<StarIcon height={size} width={size} />
			</div>
		</label>
	{/each}
</div>

<style>
	.active {
		color: var(--color);
	}
</style>

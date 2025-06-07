<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import { activeLineAction } from "../../actions/index.js"
	import HoverFollower from "../hover-follower/index.js"
	import type { ActionType, OrientationType } from "../../types/index.js"
	import { classMapUtil, mergeStyleUtil } from "../../utils/index.js"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		lineStyle?: boolean | { color?: string; height?: string }
		hoverFollower?: boolean | { bgColor?: string }
		orientation?: OrientationType
		scrollable?: boolean
	}

	let {
		class: className,
		lineStyle,
		hoverFollower,
		orientation = "horizontal",
		scrollable = true,
		children,
		...rest
	}: Props = $props()

	function getValue<T extends object, K extends keyof T>(
		obj: unknown,
		key: K,
		fallback: T[K]
	): T[K] {
		if (obj && typeof obj === "object" && key in obj) {
			return (obj as T)[key] ?? fallback
		}
		return fallback
	}

	const lineColor = getValue<{ color?: string }, "color">(
		lineStyle,
		"color",
		"var(--ff-color-on-surface)"
	)
	const lineHeight = getValue<{ height?: string }, "height">(
		lineStyle,
		"height",
		"2px"
	)
	const bgColor = getValue<{ bgColor?: string }, "bgColor">(
		hoverFollower,
		"bgColor",
		undefined
	)

	const dataSet = {
		"data-line-color": lineColor,
		"data-line-height": lineHeight
	}

	const style = mergeStyleUtil(
		"display: flex;",
		orientation === "vertical" ? "flex-direction: column;" : "",
		orientation === "horizontal"
			? `border-bottom: 1px solid color-mix(in srgb, ${lineColor} 50%, gray 50%);`
			: "",
		rest.style
	)
</script>

<div {...rest} class={classMapUtil("tabList", { ["scrollable"]: scrollable })}>
	{#if hoverFollower}
		<HoverFollower
			{...dataSet}
			{bgColor}
			class={className}
			{style}
			{orientation}
			actions={[
				[
					activeLineAction as ActionType<HTMLElement>,
					{
						orientation,
						firstChildIndex: 1
					}
				]
			]}
		>
			{@render children?.()}
		</HoverFollower>
	{:else}
		<div use:activeLineAction={{ orientation }} {style} {...dataSet} {...rest}>
			{@render children?.()}
		</div>
	{/if}
</div>

<style>
	.tabList {
		max-width: 100%;
		max-height: 100%;
		overflow: auto;
		scrollbar-width: none;
		-ms-overflow-style: none;
	}

	.tabList.scrollable {
		display: flex;
	}

	.tabList::-webkit-scrollbar {
		display: none;
	}
</style>

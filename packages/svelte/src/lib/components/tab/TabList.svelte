<script lang="ts">
	import { Constants } from "@dxdns-kit/core"
	import type { HTMLAttributes } from "svelte/elements"
	import { activeLineAction } from "@dxdns-kit/core/actions"
	import HoverFollower from "../hover-follower/index.js"
	import type { ActionType, OrientationType } from "@dxdns-kit/core/types"
	import {
		classMapUtil,
		getPropValueUtil,
		mergeStyleUtil
	} from "@dxdns-kit/core/utils"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		lineStyle?:
			| boolean
			| {
					color?: string
					height?: string
			  }
		hoverFollower?: boolean | { bgColor?: string }
		orientation?: OrientationType
		scrollable?: boolean
	}

	let {
		class: className = "",
		lineStyle,
		hoverFollower,
		orientation = "horizontal",
		scrollable = true,
		children,
		...rest
	}: Props = $props()

	const lineColor = getPropValueUtil<{ color?: string }, "color">(
		lineStyle,
		"color",
		Constants.themeColorVar.onSurface
	)
	const lineHeight = getPropValueUtil<{ height?: string }, "height">(
		lineStyle,
		"height",
		"2px"
	)
	const bgColor = getPropValueUtil<{ bgColor?: string }, "bgColor">(
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

<div
	{...rest}
	class={classMapUtil("tabList", {
		["scrollable"]: scrollable
	})}
>
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
		<div
			use:activeLineAction={{
				orientation
			}}
			{style}
			{...dataSet}
			{...rest}
		>
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

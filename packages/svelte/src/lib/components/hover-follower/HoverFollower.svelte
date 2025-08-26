<script lang="ts">
	import {
		actionUtil,
		classMapUtil,
		mergeStyleUtil
	} from "@navnex-kit/core/utils"
	import { hoverFollowerAction } from "@navnex-kit/core/actions"
	import type { ActionEntryType, OrientationType } from "@navnex-kit/core/types"
	import type { HTMLAttributes } from "svelte/elements"

	interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {
		orientation?: OrientationType
		bgColor?: string
		actions?: ActionEntryType<HTMLElement>[]
		startIn?: number
	}

	let {
		class: className = "",
		bgColor,
		orientation = "vertical",
		actions,
		startIn = 0,
		children,
		...rest
	}: Props = $props()

	const direction = orientation === "horizontal" ? "row" : "column"

	const style = mergeStyleUtil(`--direction: ${direction}`, rest.style)
</script>

<div
	{...rest}
	class={classMapUtil(className, "hoverFollower")}
	use:hoverFollowerAction={{
		orientation,
		bgColor,
		startIn
	}}
	use:actionUtil={actions}
	{style}
>
	{@render children?.()}
</div>

<style>
	.hoverFollower {
		position: relative;
		display: flex;
		gap: 0.5rem;
		flex-direction: var(--direction, "column");
	}
</style>

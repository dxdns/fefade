<script lang="ts">
	import {
		actionUtil,
		classMapUtil,
		mergeStyleUtil
	} from "@dxdns/feflow-core/utils"
	import { hoverFollowerAction } from "../../actions/index.js"
	import type { ActionEntryType, OrientationType } from "../../types/index.js"
	import type { HTMLAttributes } from "svelte/elements"

	interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {
		orientation?: OrientationType
		bgColor?: string
		actions?: ActionEntryType<HTMLElement>[]
	}

	let {
		class: className,
		bgColor,
		orientation = "vertical",
		actions,
		children,
		...rest
	}: Props = $props()

	const direction = orientation === "horizontal" ? "row" : "column"

	const style = mergeStyleUtil(`--direction: ${direction}`, rest.style)
</script>

<div
	{...rest}
	class={classMapUtil(className, "hoverFollower")}
	use:hoverFollowerAction={{ orientation, bgColor }}
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

<script lang="ts">
	import {
		actionUtil,
		classMapUtil,
		mergeStyleUtil
	} from "../../utils/index.js"
	import { hoverFollowerAction } from "../../actions/index.js"
	import type { ActionEntryType, OrientationType } from "../../types/index.js"
	import type { HTMLAttributes } from "svelte/elements"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		orientation?: OrientationType
		bgColor?: string
		actions?: ActionEntryType<HTMLElement>[]
	}

	let {
		class: className,
		bgColor = "var(--ff-color-surface)",
		orientation = "vertical",
		actions,
		children,
		...rest
	}: Props = $props()

	const style = mergeStyleUtil(`--color-bg: ${bgColor};`, rest.style)
</script>

<div
	{...rest}
	class="hoverFollower"
	use:hoverFollowerAction={orientation}
	use:actionUtil={actions}
	{style}
>
	<div class={classMapUtil(className, "overlay")}></div>
	{@render children?.()}
</div>

<style>
	.hoverFollower {
		position: relative;
	}

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		border-radius: 8px;
		background: var(--color-bg);
		opacity: 0;
		pointer-events: none;
		transition:
			transform 0.3s ease,
			height 0.3s ease,
			opacity 0.2s ease;
		z-index: 0;
	}
</style>

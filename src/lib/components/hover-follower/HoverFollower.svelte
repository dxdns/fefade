<script lang="ts">
	import { actionUtil, mergeStyleUtil } from "../../utils/index.js"
	import { hoverFollowerAction } from "../../actions/index.js"
	import type { ActionEntryType, OrientationType } from "../../types/index.js"
	import type { HTMLAttributes } from "svelte/elements"

	interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {
		orientation?: OrientationType
		bgColor?: string
		actions?: ActionEntryType<HTMLElement>[]
	}

	let {
		bgColor,
		orientation = "vertical",
		actions,
		children,
		...rest
	}: Props = $props()

	const style = mergeStyleUtil(
		"position: relative;",
		"display:flex; gap: 0.5rem;",
		`flex-direction: ${orientation === "horizontal" ? "row" : "column"};`,
		rest.style
	)
</script>

<div
	{...rest}
	use:hoverFollowerAction={{ orientation }}
	use:actionUtil={actions}
	{style}
>
	<div style={bgColor !== undefined ? `background: ${bgColor};` : ""}></div>
	{@render children?.()}
</div>

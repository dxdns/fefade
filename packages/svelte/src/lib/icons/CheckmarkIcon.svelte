<script lang="ts">
	import type { SVGAttributes } from "svelte/elements"
	import { checkmarkIcon } from "@navnex-kit/core/icons"
	import { mergeStyleUtil } from "@navnex-kit/core/utils"

	interface Props extends SVGAttributes<SVGSVGElement> {}

	let {
		class: className = "",
		fill = "none",
		viewBox = "0 0 24 24",
		...rest
	}: Props = $props()
</script>

<svg
	{...rest}
	class={className}
	style={mergeStyleUtil(
		"display: inline-block; vertical-align: middle;",
		rest.style
	)}
	{fill}
	{viewBox}
>
	<path
		stroke-linejoin="round"
		stroke-linecap="round"
		stroke-width="3"
		stroke="currentColor"
		d={checkmarkIcon}
	></path>
</svg>

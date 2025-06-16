<script lang="ts">
	import type { SVGAttributes } from "svelte/elements"
	import mergeStyleUtil from "../utils/mergeStyleUtil.js"

	interface Props extends SVGAttributes<SVGSVGElement> {}

	let { class: className, ...rest }: Props = $props()

	const style = mergeStyleUtil(
		`
		display: inline-block; 
		vertical-align: middle; 
		fill: currentColor;
		width: 24px;
		height: 24px;
		`,
		rest.style
	)
</script>

<svg
	{...rest}
	class={className}
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 -960 960 960"
	{style}
>
	<path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
</svg>

<script lang="ts">
	import type { SVGAttributes } from "svelte/elements"
	import { mergeStyleUtil } from "@feflow/core/utils"

	interface Props extends SVGAttributes<SVGSVGElement> {}

	let { class: className, ...rest }: Props = $props()

	const style = mergeStyleUtil(
		`
		display: inline-block; 
		vertical-align: middle; 
		fill: ${rest.fill ?? "currentColor"};
		width: ${rest.width ?? "24px"};
		height: ${rest.height ?? "24px"};
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
	<path
		d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
	/>
</svg>

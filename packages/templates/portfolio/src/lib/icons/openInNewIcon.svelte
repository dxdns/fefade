<script lang="ts">
	import type { SVGAttributes } from "svelte/elements"

	interface Props extends SVGAttributes<SVGSVGElement> {}

	let { class: className, ...rest }: Props = $props()

	const style = `
		display: inline-block; 
		vertical-align: middle; 
		fill: ${rest.fill ?? "currentColor"};
		width: ${rest.width ?? "24px"};
		height: ${rest.height ?? "24px"};
		${rest.style !== undefined ? rest.style : ""}
		`
</script>

<svg
	{...rest}
	class={className}
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 -960 960 960"
	{style}
>
	<path
		d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"
	/>
</svg>

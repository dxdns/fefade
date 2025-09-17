<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import type { OrientationType } from "@fefade/core/types"
	import { mergeStyleUtil } from "@fefade/core/utils"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		orientation?: OrientationType
	}

	let {
		class: className = "",
		orientation = "horizontal",
		children,
		...rest
	}: Props = $props()

	const style = mergeStyleUtil(
		orientation === "vertical" ? "display: flex;" : "",
		rest.style
	)
</script>

<div {...rest} class={className} {style}>
	{@render children?.()}
</div>

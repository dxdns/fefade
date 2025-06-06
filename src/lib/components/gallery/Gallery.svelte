<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import styles from "./Gallery.module.css"
	import { classMapUtil, mergeStyleUtil } from "../../utils/index.js"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		variant?: "default" | "masonry"
		columns?: number | string
		gap?: number | string
	}

	let {
		class: className = "",
		variant = "default",
		columns = "auto-fit",
		gap = "0.75rem",
		children,
		...rest
	}: Props = $props()
</script>

<div
	{...rest}
	class={classMapUtil(className, styles.gallery, [variant, styles])}
	style={mergeStyleUtil(
		`--columns: ${columns}; 
		--gap: ${typeof gap === "number" ? `${gap}px` : gap};`,
		rest.style
	)}
>
	{@render children?.()}
</div>

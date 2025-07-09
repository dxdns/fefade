<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import styles from "./Gallery.module.css"
	import {
		classMapUtil,
		mergeStyleUtil,
		normalizeSizeUtil
	} from "core/utils"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		variant?: "default" | "masonry"
		columns?: number | string
		gap?: number | string
		minWidth?: number | string
		maxWidth?: number | string
	}

	let {
		class: className = "",
		variant = "default",
		columns = "auto-fit",
		gap = "0.75rem",
		minWidth = "12.5rem",
		maxWidth = "1fr",
		children,
		...rest
	}: Props = $props()
</script>

<div
	{...rest}
	class={classMapUtil(className, styles.gallery, [variant, styles])}
	style={mergeStyleUtil(
		`--columns: ${columns}; 
		--gap: ${normalizeSizeUtil(gap)};
		--min-width: ${normalizeSizeUtil(minWidth)};
		--max-width: ${normalizeSizeUtil(maxWidth)};`,
		rest.style
	)}
>
	{@render children?.()}
</div>

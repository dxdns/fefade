<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import {
		classMapUtil,
		mergeStyleUtil,
		normalizeSizeUtil
	} from "@fefade/core/utils"
	import type { GridType } from "@fefade/core/types"
	import styles from "@fefade/core/styles/Grid.module.css"

	interface Props extends HTMLAttributes<HTMLDivElement>, GridType {}

	let {
		class: className = "",
		variant,
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
	class={classMapUtil(
		className,
		[className, styles],
		[variant, styles],
		styles.grid
	)}
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

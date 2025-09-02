<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"
	import { classMapUtil } from "@feflow-ui/core/utils"
	import type {
		ActionEntryType,
		ColorType,
		VariantType
	} from "@feflow-ui/core/types"
	import TextField from "../text-field/index.js"
	import { searchIcon } from "@feflow-ui/core/icons"
	import styles from "@feflow-ui/core/styles/SearchInput.module.css"

	interface Props extends Omit<Omit<HTMLInputAttributes, "type">, "size"> {
		variant?: VariantType
		color?: ColorType
		actions?: ActionEntryType<HTMLElement>[]
	}

	let {
		class: className = "",
		variant = "text",
		color,
		actions,
		...rest
	}: Props = $props()
</script>

<div
	class={classMapUtil(
		className,
		[className, styles],
		[variant, styles],
		styles.searchInput
	)}
>
	<svg
		class={styles.icon}
		style="
		display: inline-block; 
		vertical-align: middle;
		fill: currentColor;
		width: 24px;
		height: 24px;
		"
	>
		<path d={searchIcon}></path>
	</svg>
	<TextField
		{...rest}
		class={styles.inputGroup}
		{actions}
		{variant}
		{color}
		type="search"
	/>
</div>

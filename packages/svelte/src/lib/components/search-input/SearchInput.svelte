<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"
	import { classMapUtil } from "@feflow/core/utils"
	import styles from "./SearchInput.module.css"
	import type {
		ActionEntryType,
		ColorType,
		VariantType
	} from "../../types/index.js"
	import { SearchIcon } from "../../icons/index.js"
	import TextField from "../text-field/index.js"

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
	<SearchIcon class={styles.icon} />
	<TextField
		{...rest}
		class={styles.inputGroup}
		{actions}
		{variant}
		{color}
		type="search"
	/>
</div>

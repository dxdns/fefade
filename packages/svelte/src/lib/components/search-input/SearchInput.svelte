<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"
	import { classMapUtil } from "@navnex-kit/core/utils"
	import type {
		ActionEntryType,
		ColorType,
		VariantType
	} from "@navnex-kit/core/types"
	import { SearchIcon } from "../../icons/index.js"
	import TextField from "../text-field/index.js"
	import styles from "@navnex-kit/core/styles/SearchInput.module.css"

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

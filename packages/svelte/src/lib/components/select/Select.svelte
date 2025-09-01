<script lang="ts">
	import type { HTMLSelectAttributes } from "svelte/elements"
	import { classMapUtil } from "@feflow-ui/core/utils"
	import styles from "./Select.module.css"
	import { KeyboardArrowDownIcon } from "../../icons/index.js"
	import type { VariantType } from "@feflow-ui/core/types"

	interface Props extends HTMLSelectAttributes {
		variant?: VariantType
	}

	let {
		class: className = "",
		variant = "contained",
		children,
		...rest
	}: Props = $props()
</script>

<div
	class={classMapUtil(
		className,
		[className, styles],
		[variant, styles],
		styles.select
	)}
	style={rest.style}
>
	<select {...rest} style={undefined}>
		{@render children?.()}
	</select>
	<KeyboardArrowDownIcon class={styles.icon} height="24px" width="24px" />
</div>

<script lang="ts">
	import type { HTMLSelectAttributes } from "svelte/elements"
	import { classMapUtil } from "@dxdns-kit/core/utils"
	import type { VariantType } from "@dxdns-kit/core/types"
	import { keyboardArrowDownIcon } from "@dxdns-kit/core/icons"
	import styles from "./Select.module.css"

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
	<svg
		class={styles.icon}
		viewBox="0 -960 960 960"
		style="
		display: inline-block; 
		vertical-align: middle;
		fill: currentColor;
		width: 24px;
		height: 24px;
		"
	>
		<path d={keyboardArrowDownIcon}></path>
	</svg>
</div>

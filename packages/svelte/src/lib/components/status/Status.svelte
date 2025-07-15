<script lang="ts">
	import {
		classMapUtil,
		mergeStyleUtil,
		normalizeSizeUtil
	} from "@dxdns/feflow-core/utils"
	import type { HTMLAttributes } from "svelte/elements"
	import type { StatusType } from "@dxdns/feflow-core/types"
	import styles from "@dxdns/feflow-core/styles/Status.module.css"

	interface Props extends HTMLAttributes<HTMLDivElement>, StatusType {}

	let {
		class: className = "",
		variant = "none",
		color = "var(--ff-bg)",
		size = 30,
		...rest
	}: Props = $props()
</script>

<div
	{...rest}
	class={classMapUtil(
		className,
		[className, styles],
		[variant, styles],
		styles.status
	)}
	style={mergeStyleUtil(
		`--color: ${color};
        --bg: whitesmoke;
        --size: ${normalizeSizeUtil(size)};`,
		rest.style
	)}
></div>

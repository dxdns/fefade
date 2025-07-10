<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import type { BadgeType } from "@dxdns/feflow-core/types"
	import { classMapUtil } from "@dxdns/feflow-core/utils"
	import styles from "@dxdns/feflow-core/styles/Badge.module.css"

	interface Props extends HTMLAttributes<HTMLSpanElement>, BadgeType {}

	let {
		class: className = "",
		size = "xs",
		variant = "contained",
		roundedFull = false,
		children,
		...rest
	}: Props = $props()
</script>

<span
	{...rest}
	class={classMapUtil(
		className,
		[className, styles],
		styles.badge,
		[size, styles],
		[variant, styles],
		{ [styles.roundedFull]: roundedFull }
	)}
>
	{@render children?.()}
</span>

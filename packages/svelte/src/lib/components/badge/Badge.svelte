<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import type { BadgeType } from "@feflow-ui/core/types"
	import { classMapUtil } from "@feflow-ui/core/utils"
	import styles from "@feflow-ui/core/styles/Badge.module.css"

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
		{
			[styles.roundedFull]: roundedFull
		}
	)}
>
	{@render children?.()}
</span>

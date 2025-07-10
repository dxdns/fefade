<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import type { SizeType, VariantType } from "../../types/index.js"
	import { classMapUtil } from "@feflow/core/utils"
	import styles from "@feflow/core/styles/Badge.module.css"

	interface Props extends HTMLAttributes<HTMLSpanElement> {
		size?: SizeType
		variant?: Exclude<VariantType, "text">
		roundedFull?: boolean
	}

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

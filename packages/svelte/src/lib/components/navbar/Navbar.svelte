<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import { classMapUtil } from "@feflow-ui/core/utils"
	import { fadeOnScrollAction } from "@feflow-ui/core/actions"
	import type { VariantType } from "@feflow-ui/core/types"
	import styles from "@feflow-ui/core/styles/Navbar.module.css"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		isTranslucent?: boolean
		fadeOnScroll?: boolean
		variant?: VariantType
	}

	let {
		class: className = "",
		isTranslucent = false,
		fadeOnScroll = false,
		variant = "contained",
		children,
		...rest
	}: Props = $props()
</script>

<div
	{...rest}
	data-fade-on-scroll={fadeOnScroll}
	class={classMapUtil(
		className,
		[className, styles],
		[variant, styles],
		styles.navbar,
		{
			[styles.isTranslucent]: isTranslucent
		}
	)}
	use:fadeOnScrollAction
>
	{@render children?.()}
</div>

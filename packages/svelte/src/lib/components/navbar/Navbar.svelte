<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import { classMapUtil } from "@dxdns/feflow-core/utils"
	import styles from "./Navbar.module.css"
	import { fadeOnScrollAction } from "@dxdns/feflow-core/actions"
	import type { VariantType } from "@dxdns/feflow-core/types"

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

	let isOpen = $state(false)
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
			[styles.isTranslucent]: isTranslucent,
			[styles.show]: isOpen
		}
	)}
	use:fadeOnScrollAction
>
	{@render children?.()}
</div>

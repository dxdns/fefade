<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import { classMapUtil } from "core/utils"
	import styles from "./Navbar.module.css"
	import { fadeOnScrollAction } from "../../actions/index.js"
	import type { VariantType } from "../../types/index.js"

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

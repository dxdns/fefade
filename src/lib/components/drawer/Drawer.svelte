<script lang="ts">
	import type { Snippet } from "svelte"
	import type { HTMLAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import styles from "./Drawer.module.css"
	import type { PositionTypeNoCenter } from "../../types/index.js"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		isOpen: boolean
		/** @deprecated Use 'variant' instead. */
		positionStyle?: "relative" | "absolute" | "fixed"
		variant?: "permanent" | "temporary"
		position?: PositionTypeNoCenter
		handleClose?: () => void
		header?: Snippet<[]>
		content: Snippet<[]>
	}

	let {
		class: className = "",
		isOpen = false,
		positionStyle = "fixed",
		variant = "temporary",
		position = "left",
		handleClose,
		header,
		content,
		...rest
	}: Props = $props()
</script>

{#if isOpen && variant === "temporary"}
	<button
		aria-labelledby="overlay"
		aria-label="Close overlay"
		class={styles.overlay}
		onclick={handleClose}
		style={rest.style}
	>
	</button>
{/if}

<div
	{...rest}
	class={classMapUtil(
		className,
		[className, styles],
		styles.drawer,
		[position, styles],
		[variant, styles],
		[positionStyle, styles],
		{
			[styles.show]: isOpen
		}
	)}
>
	{@render header?.()}
	<div class={styles.content}>
		{@render content()}
	</div>
</div>

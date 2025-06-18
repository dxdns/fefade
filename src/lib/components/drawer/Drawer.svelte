<script lang="ts">
	import type { Snippet } from "svelte"
	import type { HTMLAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import styles from "./Drawer.module.css"
	import type { PositionNoCenterType } from "../../types/index.js"
	import { mergeStyleUtil } from "../../utils/index.js"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		withOverlay?: boolean
		isOpen: boolean
		variant?: "permanent" | "temporary"
		position?: PositionNoCenterType
		handleClose?: () => void
		header?: Snippet<[]>
	}

	let {
		class: className = "",
		withOverlay = true,
		isOpen = false,
		variant = "temporary",
		position = "left",
		handleClose,
		header,
		children,
		...rest
	}: Props = $props()
</script>

{#if withOverlay && isOpen && variant === "temporary"}
	<button
		aria-labelledby="overlay"
		aria-label="Close overlay"
		onclick={handleClose}
		style={mergeStyleUtil(
			`
		all: unset;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		z-index: 998;
		background: rgba(0, 0, 0, 0.5);
		width: 100%;
		height: 100%;
		`,
			rest.style
		)}
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
		{
			[styles.show]: isOpen
		}
	)}
	style={undefined}
>
	{@render header?.()}
	<div class={styles.content} style={rest.style}>
		{@render children?.()}
	</div>
</div>

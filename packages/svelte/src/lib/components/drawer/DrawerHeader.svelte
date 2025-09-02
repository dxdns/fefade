<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import { classMapUtil } from "@feflow-ui/core/utils"
	import Button from "../button/index.js"
	import { closeIcon } from "@feflow-ui/core/icons"
	import styles from "@feflow-ui/core/styles/DrawerHeader.module.css"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		handleClose?: () => void
	}

	let {
		class: className = "",
		handleClose,
		children,
		...rest
	}: Props = $props()
</script>

<div
	{...rest}
	class={classMapUtil(className, [className, styles], styles.drawerHeader, {
		[styles.isClosable]: Boolean(handleClose)
	})}
>
	{@render children?.()}
	{#if handleClose}
		<Button variant="text" class={styles.buttonClose} onclick={handleClose}>
			<svg
				viewBox="0 -960 960 960"
				style="
				display: inline-block; 
				vertical-align: middle;
				fill: currentColor;
				width: 24px;
				height: 24px;
				"
			>
				<path d={closeIcon}></path>
			</svg>
		</Button>
	{/if}
</div>

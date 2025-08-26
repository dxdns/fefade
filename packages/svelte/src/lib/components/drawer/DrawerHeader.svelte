<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import { classMapUtil } from "@navnex-kit/core/utils"
	import { CloseIcon } from "../../icons/index.js"
	import Button from "../button/index.js"
	import styles from "@navnex-kit/core/styles/DrawerHeader.module.css"

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
			<CloseIcon />
		</Button>
	{/if}
</div>

<script lang="ts">
	import type { ClassValue, HTMLAttributes } from "svelte/elements"
	import styles from "./Dialog.module.css"
	import Modal from "../modal/index.js"
	import classMapUtil from "../../utils/classMapUtil.js"
	import Button from "../button/index.js"
	import type { Snippet } from "svelte"
	import type { ColorType } from "../../types/index.js"

	type ActionType = {
		label: string
		handleClick: () => void
		bgColor?: ColorType
	}

	interface Props extends HTMLAttributes<HTMLDivElement> {
		class?: ClassValue
		label: string | Snippet
		isOpen: boolean
		handleClose: () => void
		action: ActionType
		hideCloseButton?: boolean
	}

	let {
		class: className = "",
		label,
		isOpen,
		handleClose,
		action,
		hideCloseButton = false,
		children,
		...rest
	}: Props = $props()
</script>

<Modal
	{...rest}
	class={classMapUtil({
		[className as string]: true,
		[styles.dialog]: true
	})}
	{label}
	{isOpen}
	{handleClose}
	{hideCloseButton}
>
	{@render children?.()}
	<div class={styles.actions}>
		<Button type="button" variant="outlined" onclick={handleClose}>
			Cancelar
		</Button>
		<Button type="button" bgColor={action.bgColor} onclick={action.handleClick}>
			{action.label}
		</Button>
	</div>
</Modal>

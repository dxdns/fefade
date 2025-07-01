<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import styles from "./Modal.module.css"
	import classMapUtil from "../../utils/classMapUtil.js"
	import { fade, scale } from "svelte/transition"
	import Card from "../card/index.js"
	import type { VariantType } from "../../types/index.js"

	export interface ModalProps {
		isOpen: boolean
		handleClose: () => void
		variant?: Exclude<VariantType, "text">
	}

	interface Props extends ModalProps, HTMLAttributes<HTMLDivElement> {}

	let {
		class: className = "",
		isOpen,
		handleClose,
		variant = "contained",
		children,
		...rest
	}: Props = $props()

	let el: HTMLDivElement | undefined = $state()

	$effect(() => {
		if (isOpen) {
			el?.focus()
		}
	})
</script>

{#if isOpen}
	<div class={classMapUtil(className, [className, styles], styles.modal)}>
		<div
			bind:this={el}
			class={styles.overlay}
			in:fade={{ duration: 300 }}
			out:fade={{ duration: 300 }}
			role="alertdialog"
			tabindex="0"
			onkeydown={(e) => {
				e.key === "Escape" || e.key === " " ? handleClose() : null
			}}
			onclick={(e) => {
				if (e.target === e.currentTarget) {
					handleClose()
				}
			}}
		>
			<div
				class={styles.wrapper}
				in:scale={{ duration: 300 }}
				out:scale={{ duration: 300 }}
			>
				<Card {...rest} class={styles.content} {variant}>
					{@render children?.()}
				</Card>
			</div>
		</div>
	</div>
{/if}

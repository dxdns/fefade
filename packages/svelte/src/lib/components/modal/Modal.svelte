<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import { classMapUtil } from "@dxdns-kit/core/utils"
	import Card from "../card/index.js"
	import type { ModalType } from "@dxdns-kit/core/types"
	import styles from "@dxdns-kit/core/styles/Modal.module.css"
	import animationStyle from "@dxdns-kit/core/styles/Animation.module.css"

	interface Props extends ModalType, HTMLAttributes<HTMLDivElement> {}

	let {
		class: className = "",
		isOpen,
		handleClose,
		variant = "contained",
		children,
		...rest
	}: Props = $props()

	let show = $state(false)
	let el: HTMLDivElement | undefined = $state()

	$effect(() => {
		if (isOpen) {
			el?.focus()
			show = true
		}
	})
</script>

{#if show}
	<div class={classMapUtil(className, [className, styles], styles.modal)}>
		<div
			bind:this={el}
			class={classMapUtil(styles.overlay, {
				[animationStyle.fadeIn]: isOpen,
				[animationStyle.fadeOut]: !isOpen
			})}
			role="alertdialog"
			tabindex="0"
			onkeydown={(e) => {
				if (e.key === "Escape" || e.key === " ") {
					handleClose()
				}
			}}
			onclick={(e) => {
				if (e.target === e.currentTarget) {
					handleClose()
				}
			}}
			onanimationend={() => {
				if (!isOpen) {
					show = false
				}
			}}
		>
			<div
				class={classMapUtil(styles.wrapper, {
					[animationStyle.scaleIn]: isOpen,
					[animationStyle.scaleOut]: !isOpen
				})}
			>
				<Card {...rest} class={styles.content} {variant}>
					{@render children?.()}
				</Card>
			</div>
		</div>
	</div>
{/if}

<script lang="ts">
	import type { ClassValue, HTMLAttributes } from "svelte/elements"
	import styles from "./Modal.module.css"
	import classMapUtil from "../../utils/classMapUtil.js"
	import { fade, scale } from "svelte/transition"
	import IconButton from "../icon-button/index.js"
	import Card from "../card/index.js"
	import type { Snippet } from "svelte"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		class?: ClassValue
		label: string | Snippet
		isOpen: boolean
		handleClose: {
			handler: () => void
			icon?: Snippet
		}
	}

	let {
		class: className = "",
		label,
		isOpen,
		handleClose,
		children,
		...rest
	}: Props = $props()

	function handleBgClick(e: MouseEvent) {
		if (e.target === e.currentTarget) {
			handleClose.handler()
		}
	}
</script>

{#if isOpen}
	<div class={styles.overlay}></div>
	<div
		{...rest}
		class={classMapUtil({
			[className as string]: true,
			[styles.modal]: true
		})}
	>
		<div
			class={styles.bg}
			in:fade={{ duration: 300 }}
			out:fade={{ duration: 300 }}
			role="button"
			tabindex="0"
			onkeydown={(e) =>
				e.key === "Enter" || e.key === " " ? handleClose.handler() : null}
			onclick={handleBgClick}
		>
			<div
				class={styles.wrapper}
				in:scale={{ duration: 300 }}
				out:scale={{ duration: 300 }}
			>
				<Card>
					<div class={styles.header}>
						{#if typeof label === "string"}
							<h2>{label}</h2>
						{:else}
							{@render label?.()}
						{/if}
						{#if handleClose.icon}
							<IconButton onclick={handleClose.handler}>
								{@render handleClose.icon?.()}
							</IconButton>
						{/if}
					</div>
					<div class={styles.content}>
						{@render children?.()}
					</div>
				</Card>
			</div>
		</div>
	</div>
{/if}

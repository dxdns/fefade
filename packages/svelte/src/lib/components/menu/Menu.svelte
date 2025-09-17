<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"
	import type { Snippet } from "svelte"
	import { autoAlignAction, clickOutsideAction } from "@fefade/core/actions"
	import { classMapUtil } from "@fefade/core/utils"
	import styles from "@fefade/core/styles/Menu.module.css"

	interface Props extends Omit<HTMLInputAttributes, "id"> {
		id: string
		isTranslucent?: boolean
		openOnHover?: boolean
		anchor: Snippet<[]>
		items: Snippet<[]>
	}

	let {
		class: className = "",
		id,
		isTranslucent = false,
		openOnHover = false,
		anchor,
		items,
		...rest
	}: Props = $props()

	let elMenu: HTMLElement | undefined
	let elInput: HTMLInputElement | undefined

	function handleMenuHover(disable: boolean) {
		if (!elMenu) return
		elMenu.classList.toggle(styles.disableHover, disable)
	}

	function handleClose() {
		if (!elInput) return
		elInput.checked = false
		if (openOnHover) handleMenuHover(true)
	}
</script>

<div
	role="region"
	class={classMapUtil(className, [className, styles], styles.menu, {
		[styles.openOnHover]: openOnHover
	})}
	use:clickOutsideAction={{
		handler: handleClose
	}}
	bind:this={elMenu}
	onmouseenter={() => {
		if (openOnHover) handleMenuHover(false)
	}}
>
	<input
		{...rest}
		class={styles.controller}
		bind:this={elInput}
		type="checkbox"
		{id}
		hidden
		style={undefined}
	/>
	<label class={styles.container} for={id}>
		<span class={styles.anchor}>
			{@render anchor?.()}
		</span>
	</label>
	<div
		class={classMapUtil(styles.content, {
			[styles.isTranslucent]: isTranslucent
		})}
		role="button"
		tabindex="0"
		use:autoAlignAction
		onclick={handleClose}
		onkeydown={() => {}}
	>
		{@render items?.()}
	</div>
</div>

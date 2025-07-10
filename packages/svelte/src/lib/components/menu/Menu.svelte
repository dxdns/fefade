<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"
	import type { Snippet } from "svelte"
	import { autoAlignAction, clickOutsideAction } from "@feflow/core/actions"
	import { classMapUtil } from "@feflow/core/utils"

	interface Props extends HTMLInputAttributes {
		isTranslucent?: boolean
		openOnHover?: boolean
		anchor: Snippet<[]>
		items: Snippet<[]>
	}

	let {
		class: className = "",
		isTranslucent = false,
		openOnHover = false,
		anchor,
		items,
		...rest
	}: Props = $props()

	let elMenu: HTMLElement | undefined
	let el: HTMLInputElement | undefined

	function handleMenuHover(disable: boolean) {
		if (!elMenu) return
		elMenu.classList.toggle("disableHover", disable)
	}

	function handleClose() {
		if (!el) return
		el.checked = false
		if (openOnHover) handleMenuHover(true)
	}
</script>

<div
	role="region"
	class={classMapUtil(className, "menu", { ["openOnHover"]: openOnHover })}
	use:clickOutsideAction={{ handler: handleClose }}
	bind:this={elMenu}
	onmouseenter={() => {
		if (openOnHover) handleMenuHover(false)
	}}
>
	<input
		{...rest}
		class="controller"
		bind:this={el}
		type="checkbox"
		id={rest.id ?? "checkbox"}
		hidden
		style={undefined}
	/>
	<label class="container" for={rest.id ?? "checkbox"}>
		<span class="anchor">
			{@render anchor?.()}
		</span>
	</label>
	<div
		class={classMapUtil("content", { ["isTranslucent"]: isTranslucent })}
		role="button"
		tabindex="0"
		use:autoAlignAction
		onclick={handleClose}
		onkeydown={() => {}}
	>
		{@render items?.()}
	</div>
</div>

<style>
	.menu {
		position: relative;
		user-select: none;
	}

	.controller {
		display: none;
	}

	.container {
		display: inline-block;
		cursor: pointer;
	}

	.anchor {
		display: inline-block;
	}

	.anchor:active {
		pointer-events: none;
	}

	.content {
		position: absolute;
		top: 100%;
		overflow: hidden;
		width: max-content;
		max-width: 100vw;
		background: var(--ff-surface);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		border-radius: 0.25rem;
		padding: 0;
		z-index: 2;
		margin: 0;
		opacity: 0;
		transform: translateY(-5px);
		pointer-events: none;
		transition:
			opacity 150ms ease-in-out,
			transform 150ms ease-in-out;
	}

	.content.isTranslucent {
		background: var(--ff-surface-variant);
		backdrop-filter: blur(15px);
	}

	.controller:checked ~ .content,
	.menu:not(.disableHover).openOnHover:hover .content {
		opacity: 1;
		transform: translateY(0);
		pointer-events: auto;
	}
</style>

<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import { classMapUtil } from "../../utils/index.js"
	import { CloseIcon } from "../../icons/index.js"
	import Button from "../button/index.js"

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
	class={classMapUtil(className, "drawerHeader", {
		["isClosable"]: Boolean(handleClose)
	})}
>
	{@render children?.()}
	{#if handleClose}
		<Button variant="text" class="buttonClose" onclick={handleClose}>
			<CloseIcon />
		</Button>
	{/if}
</div>

<style>
	.drawerHeader {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		padding: 1rem clamp(1rem, 2vw, 2rem);
		min-height: fit-content;
	}

	.drawerHeader.isClosable {
		justify-content: space-between;
	}

	.drawerHeader.borded {
		border-bottom: 1px solid var(--ff-color-border);
	}

	.buttonClose {
		display: inline-block;
	}
</style>

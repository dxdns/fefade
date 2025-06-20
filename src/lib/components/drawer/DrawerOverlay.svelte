<script lang="ts">
	import { classMapUtil } from "../../utils/index.js"
	import type { HTMLButtonAttributes } from "svelte/elements"

	interface Props extends HTMLButtonAttributes {
		isOpen?: boolean
	}

	let { class: className = "", isOpen, children, ...rest }: Props = $props()
</script>

{#if isOpen}
	<button
		{...rest}
		class={classMapUtil(className, "drawerOverlay")}
		aria-labelledby="overlay"
		aria-label="Close overlay"
	>
	</button>
{/if}

<style>
	.drawerOverlay {
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
	}
</style>

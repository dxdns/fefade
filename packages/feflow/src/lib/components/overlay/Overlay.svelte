<script lang="ts">
	import type { HTMLButtonAttributes } from "svelte/elements"
	import { classMapUtil } from "@dxdns/feflow-core/utils"

	interface Props extends HTMLButtonAttributes {
		isOpen: boolean
	}

	let {
		class: className = "",
		isOpen = false,
		children,
		...rest
	}: Props = $props()
</script>

{#if isOpen}
	<button
		{...rest}
		class={classMapUtil(className, "overlay")}
		type="button"
		aria-labelledby="overlay"
		aria-label="Close overlay"
	>
	</button>
{/if}

<style>
	.overlay {
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
		backdrop-filter: blur(1px);
		pointer-events: all;
	}
</style>

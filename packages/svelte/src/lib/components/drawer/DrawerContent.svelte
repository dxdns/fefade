<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"

	interface Props extends HTMLAttributes<HTMLDivElement> {}

	let { class: className = "", children, ...rest }: Props = $props()
</script>

<div {...rest} class="drawerContent">
	{@render children?.()}
</div>

<style>
	.drawerContent {
		margin: 0;
		flex: 1;
		display: flex;
		flex-direction: column;
		overflow-y: auto;
		overflow-x: hidden;
		position: relative;
		padding: clamp(1rem, 2vh, 2rem);
		box-sizing: border-box;
		min-height: fit-content;
	}
</style>

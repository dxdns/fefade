<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import { classMapUtil, mergeStyleUtil } from "@dxdns/feflow-core/utils"
	import { draggableGroupAction } from "@dxdns/feflow-core/actions"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		onChange?: (el: HTMLElement, index: number) => void
		cols: number
		gap: number
	}

	let {
		class: className = "",
		onChange,
		cols,
		gap,
		children,
		...rest
	}: Props = $props()
</script>

<div
	{...rest}
	id="draggableGroup"
	use:draggableGroupAction={{ onChange }}
	class={classMapUtil(className, "draggableGroup")}
	style={mergeStyleUtil(
		`--cols: ${cols};`,
		`--gap: ${(gap * 4) / 16}rem;`,
		rest.style
	)}
>
	{@render children?.()}
</div>

<style>
	.draggableGroup {
		margin: 0;
		padding: 0;
		list-style: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		user-select: none;
		display: grid;
		gap: var(--gap);
		grid-template-columns: repeat(var(--cols), 1fr);
		grid-auto-flow: row dense;
	}
</style>

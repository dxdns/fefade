<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import { classMapUtil, mergeStyleUtil } from "@navnex-kit/core/utils"

	interface Props extends HTMLAttributes<Omit<HTMLDivElement, "id">> {
		id: string
	}

	let { class: className = "", id, children, ...rest }: Props = $props()
</script>

<div
	{...rest}
	{id}
	draggable="true"
	class={classMapUtil(className, "draggableGroupItem")}
	style={mergeStyleUtil(rest.style)}
>
	{@render children?.()}
</div>

<style>
	.draggableGroupItem {
		cursor: move;
	}

	.dragging {
		opacity: 0.5;
		transform: scale(1.02);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
		z-index: 1000;
		transition:
			transform 0.15s ease,
			opacity 0.15s ease;
	}
</style>

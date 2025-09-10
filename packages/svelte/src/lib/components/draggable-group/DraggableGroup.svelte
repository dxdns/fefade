<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import type { DraggableGroupType } from "@dxdns-kit/core/types"
	import { classMapUtil, mergeStyleUtil } from "@dxdns-kit/core/utils"
	import { draggableGroupAction } from "@dxdns-kit/core/actions"
	import styles from "@dxdns-kit/core/styles/DraggableGroup.module.css"
	import stylesItem from "@dxdns-kit/core/styles/DraggableGroupItem.module.css"

	interface Props extends HTMLAttributes<HTMLDivElement>, DraggableGroupType {}

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
	use:draggableGroupAction={{
		onChange,
		styles: stylesItem
	}}
	class={classMapUtil(className, styles.draggableGroup)}
	style={mergeStyleUtil(
		`--cols: ${cols};`,
		`--gap: ${(gap * 4) / 16}rem;`,
		rest.style
	)}
>
	{@render children?.()}
</div>

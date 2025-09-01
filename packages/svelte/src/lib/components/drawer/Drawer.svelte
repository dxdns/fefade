<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import type { DrawerType } from "@feflow-ui/core/types"
	import { classMapUtil } from "@feflow-ui/core/utils"
	import styles from "@feflow-ui/core/styles/Drawer.module.css"

	interface Props extends HTMLAttributes<HTMLDivElement>, DrawerType {}

	let {
		class: className = "",
		isOpen = false,
		variant = "temporary",
		position = "left",
		children,
		...rest
	}: Props = $props()
</script>

<div
	{...rest}
	class={classMapUtil(
		className,
		[className, styles],
		styles.drawer,
		[position, styles],
		[variant, styles],
		{
			[styles.show]: isOpen
		}
	)}
>
	{@render children?.()}
</div>

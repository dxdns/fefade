<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import type { DrawerType } from "@dxdns-kit/core/types"
	import { classMapUtil } from "@dxdns-kit/core/utils"
	import styles from "@dxdns-kit/core/styles/Drawer.module.css"

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

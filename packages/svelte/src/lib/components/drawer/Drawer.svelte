<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import type { PositionNoCenterType } from "@dxdns/feflow-core/types"
	import { classMapUtil } from "@dxdns/feflow-core/utils"
	import styles from "@dxdns/feflow-core/styles/Drawer.module.css"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		isOpen: boolean
		variant?: "permanent" | "temporary"
		position?: PositionNoCenterType
	}

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

<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import styles from "./Drawer.module.css"
	import type { PositionNoCenterType } from "../../types/index.js"
	import { classMapUtil } from "@feflow/core/utils"

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

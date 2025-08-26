<script lang="ts">
	import { classMapUtil } from "@navnex-kit/core/utils"
	import type { TooltipType } from "@navnex-kit/core/types"
	import type { HTMLAttributes } from "svelte/elements"
	import styles from "@navnex-kit/core/styles/Tooltip.module.css"

	interface Props
		extends Omit<HTMLAttributes<HTMLDivElement>, "color">,
			TooltipType {}

	let {
		class: className = "",
		label,
		position = "top",
		children,
		...rest
	}: Props = $props()
</script>

<div
	{...rest}
	data-tooltip={label}
	class={classMapUtil(
		className,
		[className, styles],
		[position, styles],
		styles.tooltip
	)}
>
	{@render children?.()}
</div>

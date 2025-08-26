<script lang="ts">
	import { classMapUtil } from "@navnex-kit/core/utils"
	import type { HTMLAttributes } from "svelte/elements"
	import type { BottomSheetDragButtonType } from "@navnex-kit/core/types"
	import styles from "@navnex-kit/core/styles/BottomSheetDragButton.module.css"

	interface Props
		extends Omit<HTMLAttributes<HTMLDivElement>, "color">,
			BottomSheetDragButtonType {}

	let {
		class: className = "",
		variant = "text",
		children,
		...rest
	}: Props = $props()
</script>

<div
	{...rest}
	class={classMapUtil(
		className,
		[className, styles],
		[variant, styles],
		styles.bottomSheetDragButton
	)}
>
	{#if children}
		{@render children?.()}
	{:else}
		<span></span>
	{/if}
</div>

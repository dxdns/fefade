<script lang="ts">
	import { bottomSheetAction } from "@dxdns-kit/core/actions"
	import { classMapUtil } from "@dxdns-kit/core/utils"
	import type { HTMLAttributes } from "svelte/elements"
	import type { BottomSheetType } from "@dxdns-kit/core/types"
	import styles from "@dxdns-kit/core/styles/BottomSheet.module.css"

	interface Props
		extends Omit<HTMLAttributes<HTMLDivElement>, "color">,
			BottomSheetType {}

	let {
		class: className = "",
		isOpen,
		handleClose,
		hideIn,
		children,
		...rest
	}: Props = $props()

	$effect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden"
			document.body.style.overscrollBehaviorY = "contain"
		}
	})
</script>

<div
	use:bottomSheetAction={{ handleClose, hideIn }}
	class={classMapUtil(className, [className, styles], styles.bottomSheet, {
		[styles.show]: isOpen
	})}
>
	<div {...rest} class={styles.wrapper}>
		{@render children?.()}
	</div>
</div>

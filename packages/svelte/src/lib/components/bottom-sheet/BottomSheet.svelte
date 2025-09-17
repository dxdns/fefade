<script lang="ts">
	import { bottomSheetAction } from "@fefade/core/actions"
	import { classMapUtil } from "@fefade/core/utils"
	import type { HTMLAttributes } from "svelte/elements"
	import type { BottomSheetType } from "@fefade/core/types"
	import styles from "@fefade/core/styles/BottomSheet.module.css"

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
		} else {
			document.body.style.overflow = "auto"
			document.body.style.overscrollBehaviorY = "auto"
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

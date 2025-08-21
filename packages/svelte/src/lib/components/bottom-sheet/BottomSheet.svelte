<script lang="ts">
	import { bottomSheetAction } from "@feflow-ui/core/actions"
	import { classMapUtil } from "@feflow-ui/core/utils"
	import type { HTMLAttributes } from "svelte/elements"
	import type { BottomSheetType } from "@feflow-ui/core/types"
	import styles from "@feflow-ui/core/styles/BottomSheet.module.css"

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

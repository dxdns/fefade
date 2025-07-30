<script lang="ts">
	import { bottomSheetAction } from "@dxdns/feflow-core/actions"
	import { classMapUtil } from "@dxdns/feflow-core/utils"
	import type { HTMLAttributes } from "svelte/elements"
	import type { BottomSheetType } from "@dxdns/feflow-core/types"
	import styles from "@dxdns/feflow-core/styles/BottomSheet.module.css"

	interface Props
		extends Omit<HTMLAttributes<HTMLDivElement>, "color">,
			BottomSheetType {}

	let {
		class: className = "",
		isOpen,
		handleClose,
		children,
		...rest
	}: Props = $props()
</script>

<div
	use:bottomSheetAction={{ handleClose }}
	class={classMapUtil(className, [className, styles], styles.bottomSheet, {
		[styles.show]: isOpen
	})}
>
	<div {...rest} class={styles.wrapper}>
		{@render children?.()}
	</div>
</div>

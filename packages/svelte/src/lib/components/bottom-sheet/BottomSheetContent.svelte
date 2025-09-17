<script lang="ts">
	import { classMapUtil } from "@fefade/core/utils"
	import type { HTMLAttributes } from "svelte/elements"
	import styles from "@fefade/core/styles/BottomSheetContent.module.css"

	interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {}

	let { class: className = "", children, ...rest }: Props = $props()
</script>

<div
	{...rest}
	class={classMapUtil(
		className,
		[className, styles],
		styles.bottomSheetContent
	)}
>
	{@render children?.()}
</div>

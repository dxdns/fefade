<script lang="ts">
	import { classMapUtil } from "@fefade/core/utils"
	import type { HTMLAttributes } from "svelte/elements"
	import styles from "@fefade/core/styles/DrawerContent.module.css"

	interface Props extends HTMLAttributes<HTMLDivElement> {}

	let { class: className = "", children, ...rest }: Props = $props()
</script>

<div
	{...rest}
	class={classMapUtil(className, [className, styles], styles.drawerContent)}
>
	{@render children?.()}
</div>

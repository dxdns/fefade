<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import { classMapUtil, mergeStyleUtil } from "@dxdns/feflow-core/utils"
	import type { AlignType } from "@dxdns/feflow-core/types"
	import styles from "@dxdns/feflow-core/styles/ModalActions.module.css"

	export interface ModalActionsProps {
		align?: AlignType
	}

	interface Props extends ModalActionsProps, HTMLAttributes<HTMLDivElement> {}

	let {
		class: className = "",
		align = "end",
		children,
		...rest
	}: Props = $props()
</script>

<div
	{...rest}
	class={classMapUtil(className, [className, styles], styles.actions)}
	style={mergeStyleUtil(`--align: ${align};`, rest.style)}
>
	{@render children?.()}
</div>

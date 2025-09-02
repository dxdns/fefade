<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import { classMapUtil, mergeStyleUtil } from "@dxdns-kit/core/utils"
	import type { AlignType } from "@dxdns-kit/core/types"
	import styles from "@dxdns-kit/core/styles/ModalActions.module.css"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		align?: AlignType
	}

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

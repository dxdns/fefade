<script lang="ts" generics="T extends HTMLTagTextType">
	import { classMapUtil, mergeStyleUtil } from "@dxdns-kit/core/utils"
	import type { HTMLAttributes } from "svelte/elements"
	import styles from "./Text.module.css"
	import type {
		HTMLTagMap,
		HTMLTagTextType,
		TextType
	} from "@dxdns-kit/core/types"

	interface Props<T extends HTMLTagTextType>
		extends HTMLAttributes<HTMLTagMap[T]>,
			TextType {}
	let {
		class: className = "",
		as = "p",
		lines = Infinity,
		children,
		...rest
	}: Props<T> = $props()
</script>

<svelte:element
	this={as}
	{...rest}
	class={classMapUtil(className, [className, styles], styles.text)}
	style={mergeStyleUtil(`--lines: ${lines};`, rest.style)}
>
	{@render children?.()}
</svelte:element>

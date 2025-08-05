<script lang="ts">
	import type {
		HTMLAttributeAnchorTarget,
		HTMLAttributes
	} from "svelte/elements"
	import { classMapUtil } from "@dxdns/feflow-core/utils"
	import styles from "@dxdns/feflow-core/styles/MenuItem.module.css"

	interface Props extends HTMLAttributes<HTMLSpanElement> {
		href?: string
		target?: HTMLAttributeAnchorTarget
	}

	let {
		class: className = "",
		href,
		target = "_self",
		children,
		...rest
	}: Props = $props()
</script>

<span
	{...rest}
	class={classMapUtil(className, [className, styles], styles.menuItem)}
	onclick={href ? () => window.open(href, target) : rest.onclick}
>
	{@render children?.()}
</span>

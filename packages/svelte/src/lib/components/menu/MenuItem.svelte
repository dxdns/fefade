<script lang="ts">
	import type {
		HTMLAttributeAnchorTarget,
		HTMLAttributes
	} from "svelte/elements"
	import styles from "./MenuItem.module.css"
	import { classMapUtil } from "core/utils"

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

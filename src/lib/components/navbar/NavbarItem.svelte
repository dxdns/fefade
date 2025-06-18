<script lang="ts">
	import classMapUtil from "../../utils/classMapUtil.js"
	import type {
		HTMLAttributeAnchorTarget,
		HTMLButtonAttributes
	} from "svelte/elements"
	import Button from "../button/index.js"
	import styles from "./NavbarItem.module.css"
	import type { VariantType } from "../../types/index.js"

	interface Props extends HTMLButtonAttributes {
		variant?: VariantType
		href?: string
		target?: HTMLAttributeAnchorTarget
	}

	let {
		class: className = "",
		variant = "text",
		href,
		target = "_self",
		children,
		...rest
	}: Props = $props()
</script>

<Button
	{...rest}
	{variant}
	class={classMapUtil(className, [className, styles], styles.navbarItem, [
		variant,
		styles
	])}
	onclick={href ? () => window.open(href, target) : rest.onclick}
>
	{@render children?.()}
</Button>

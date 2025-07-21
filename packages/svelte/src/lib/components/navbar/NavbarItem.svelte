<script lang="ts">
	import { classMapUtil, handleClickUtil } from "@dxdns/feflow-core/utils"
	import type {
		HTMLAttributeAnchorTarget,
		HTMLButtonAttributes
	} from "svelte/elements"
	import Button from "../button/index.js"
	import styles from "./NavbarItem.module.css"
	import type { VariantType } from "@dxdns/feflow-core/types"

	interface Props extends HTMLButtonAttributes {
		variant?: VariantType
		href?: string
		target?: HTMLAttributeAnchorTarget
		download?: string
	}

	let {
		class: className = "",
		variant = "text",
		href,
		target = "_self",
		download,
		children,
		...rest
	}: Props = $props()
</script>

<Button
	{...rest}
	{variant}
	pressedEffect={false}
	class={classMapUtil(className, [className, styles], styles.navbarItem, [
		variant,
		styles
	])}
	onclick={(e) => {
		handleClickUtil({
			href,
			download,
			target,
			onClick: () => {
				rest.onclick?.(e)
			}
		})
	}}
>
	{@render children?.()}
</Button>

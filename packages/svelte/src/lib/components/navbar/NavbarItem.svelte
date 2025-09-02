<script lang="ts">
	import { classMapUtil, handleClickUtil } from "@dxdns-kit/core/utils"
	import type { HTMLButtonAttributes } from "svelte/elements"
	import Button from "../button/index.js"
	import type { HTMLAttrAnchor, VariantType } from "@dxdns-kit/core/types"
	import styles from "@dxdns-kit/core/styles/NavbarItem.module.css"

	interface Props extends HTMLButtonAttributes, HTMLAttrAnchor {
		variant?: VariantType
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

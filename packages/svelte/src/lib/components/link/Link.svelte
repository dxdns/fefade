<script lang="ts">
	import type { HTMLAnchorAttributes } from "svelte/elements"
	import { classMapUtil } from "@dxdns-kit/core/utils"
	import type { LinkType } from "@dxdns-kit/core/types"
	import styles from "@dxdns-kit/core/styles/Link.module.css"

	interface Props extends Omit<HTMLAnchorAttributes, "class">, LinkType {}

	let {
		class: className = "",
		pathname,
		hoverUnderline,
		hover,
		children,
		...rest
	}: Props = $props()

	const isActive = $derived(pathname === rest.href)
</script>

<a
	{...rest}
	class={classMapUtil(
		typeof className === "function" ? className({ isActive }) : className,
		styles.link,
		{
			[styles.hasHover]: Boolean(hover) || Boolean(hoverUnderline),
			[styles[hoverUnderline!]]: Boolean(hoverUnderline),
			[styles[hover!]]: Boolean(hover)
		}
	)}
	aria-current={isActive ? "page" : undefined}
>
	{@render children?.()}
</a>

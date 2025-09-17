<script lang="ts">
	import type { HTMLAnchorAttributes } from "svelte/elements"
	import { classMapUtil } from "@fefade/core/utils"
	import type { LinkType } from "@fefade/core/types"
	import styles from "@fefade/core/styles/Link.module.css"

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

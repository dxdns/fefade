<script lang="ts">
	import type { HTMLAnchorAttributes } from "svelte/elements"
	import { classMapUtil } from "@feflow/core/utils"
	import styles from "./Link.module.css"

	interface Props extends HTMLAnchorAttributes {
		class?: string | (({ isActive }: { isActive: boolean }) => string)
		pathname?: string

		/**
		 * @deprecated Use `hover` instead.
		 */
		hoverUnderline?: "left" | "center" | "right"
		hover?: "left" | "center" | "right" | "underlineNone"
	}

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

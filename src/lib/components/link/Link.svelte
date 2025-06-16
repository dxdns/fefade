<script lang="ts">
	import type { HTMLAnchorAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import styles from "./Link.module.css"

	interface Props extends HTMLAnchorAttributes {
		class?: string | (({ isActive }: { isActive: boolean }) => string)
		pathname?: string
		hoverUnderline?: "left" | "center" | "right"
	}

	let {
		class: className = "",
		pathname,
		hoverUnderline,
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
			[styles.linkUnderline]: Boolean(hoverUnderline),
			[styles[hoverUnderline!]]: Boolean(hoverUnderline)
		}
	)}
	aria-current={isActive ? "page" : undefined}
>
	{@render children?.()}
</a>

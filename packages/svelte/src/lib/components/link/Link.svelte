<script lang="ts">
	import type { HTMLAnchorAttributes } from "svelte/elements"
	import { classMapUtil, styleToStringUtil } from "@fefade/core/utils"
	import type { CSSKebabType, LinkType } from "@fefade/core/types"
	import styles from "@fefade/core/styles/Link.module.css"
	import buttonStyles from "@fefade/core/styles/Button.module.css"

	interface Props
		extends Omit<Omit<HTMLAnchorAttributes, "class">, "style">,
			LinkType<CSSKebabType> {}

	let {
		class: className = "",
		pathname,
		hover,
		variant = "text",
		style,
		children,
		...rest
	}: Props = $props()

	const isActive = $derived(
		rest.href && pathname
			? pathname === rest.href
			: rest["aria-current"] === "page"
	)
</script>

<a
	{...rest}
	class={classMapUtil(
		typeof className === "function" ? className({ isActive }) : className,
		[variant, buttonStyles],
		buttonStyles.button,
		styles.link,
		{
			[styles.hasHover]: Boolean(hover),
			[styles[hover!]]: Boolean(hover)
		}
	)}
	aria-current={isActive ? "page" : undefined}
	style={typeof style === "function"
		? styleToStringUtil(style({ isActive }))
		: styleToStringUtil(style)}
>
	{@render children?.()}
</a>

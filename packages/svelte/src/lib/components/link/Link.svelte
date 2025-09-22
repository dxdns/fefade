<script lang="ts">
	import type { HTMLAnchorAttributes } from "svelte/elements"
	import { classMapUtil } from "@fefade/core/utils"
	import type { LinkType, VariantType } from "@fefade/core/types"
	import styles from "@fefade/core/styles/Link.module.css"
	import buttonStyles from "@fefade/core/styles/Button.module.css"

	interface Props extends Omit<HTMLAnchorAttributes, "class">, LinkType {
		variant?: VariantType
	}

	let {
		class: className = "",
		pathname,
		hover,
		variant = "text",
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
>
	{@render children?.()}
</a>

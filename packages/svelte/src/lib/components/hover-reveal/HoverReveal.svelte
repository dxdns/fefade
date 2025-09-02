<script lang="ts">
	import type {
		HTMLAttributeAnchorTarget,
		HTMLAttributes
	} from "svelte/elements"
	import { classMapUtil, normalizeSizeUtil } from "@dxdns-kit/core/utils"
	import type { Snippet } from "svelte"
	import styles from "./HoverReveal.module.css"

	interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {
		blur?: string
		reveal: Snippet<[]>
		href?: string
		target?: HTMLAttributeAnchorTarget
	}

	let {
		class: className = "",
		blur = "4px",
		reveal,
		href,
		target = "_self",
		children,
		...rest
	}: Props = $props()

	let hovered = $state(false)
</script>

<div
	{...rest}
	role="button"
	tabindex="0"
	class={classMapUtil(className, [className, styles], styles.hoverReveal, {
		[styles.hovered]: hovered
	})}
	onmouseenter={() => (hovered = true)}
	onmouseleave={() => (hovered = false)}
	onclick={href ? () => window.open(href, target) : rest.onclick}
	style={undefined}
>
	<div class={styles.blurred} style="--blur: {normalizeSizeUtil(blur)}">
		{@render children?.()}
	</div>

	<div class={styles.reveal} style={rest.style}>
		{@render reveal()}
	</div>
</div>

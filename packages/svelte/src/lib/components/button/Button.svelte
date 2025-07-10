<script lang="ts">
	import type {
		HTMLAttributeAnchorTarget,
		HTMLButtonAttributes
	} from "svelte/elements"
	import { classMapUtil } from "@feflow/core/utils"
	import type { SizeType, VariantType } from "../../types/index.js"
	import Spinner from "../spinner/index.js"
	import styles from "./Button.module.css"

	interface Props extends HTMLButtonAttributes {
		pressedEffect?: boolean
		variant?: VariantType
		isLoading?: boolean
		roundedFull?: boolean
		size?: SizeType
		href?: string
		target?: HTMLAttributeAnchorTarget
		download?: string
	}

	let {
		class: className = "",
		pressedEffect = true,
		variant = "contained",
		isLoading = false,
		roundedFull = false,
		size = "sm",
		href,
		target = "_self",
		download,
		children,
		...rest
	}: Props = $props()

	function handleClick(
		event: MouseEvent & {
			currentTarget: EventTarget & HTMLButtonElement
		}
	) {
		if (download && href) {
			const a = document.createElement("a")
			a.href = href
			a.download = download
			document.body.appendChild(a)
			a.click()
			document.body.removeChild(a)
		} else if (href) {
			window.open(href, target)
		} else if (typeof rest?.onclick === "function") {
			rest.onclick(event)
		}
	}
</script>

<button
	{...rest}
	class={classMapUtil(
		className,
		[className, styles],
		[variant, styles],
		[size, styles],
		styles.button,
		{ [styles.roundedFull]: roundedFull, [styles.pressedEffect]: pressedEffect }
	)}
	type={rest.type ?? "button"}
	onclick={handleClick}
>
	{#if isLoading}
		<Spinner />
	{:else}
		<div class={styles.content}>
			{@render children?.()}
		</div>
	{/if}
</button>

<script lang="ts">
	import type {
		HTMLAttributeAnchorTarget,
		HTMLAttributes
	} from "svelte/elements"
	import { classMapUtil, mergeStyleUtil } from "../../utils/index.js"
	import styles from "./Card.module.css"
	import { glowOnHoverAction } from "../../actions/index.js"
	import type { VariantType } from "../../types/index.js"

	interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {
		glowOnHover?: boolean
		variant?: Exclude<VariantType, "text">
		href?: string
		target?: HTMLAttributeAnchorTarget
	}

	let {
		class: className = "",
		glowOnHover = false,
		variant = "outlined",
		href,
		target = "_self",
		children,
		...rest
	}: Props = $props()
</script>

{#snippet component()}
	<div
		{...rest}
		role="button"
		class={classMapUtil(
			className,
			[className, styles],
			[variant, styles],
			styles.card
		)}
		style={mergeStyleUtil(href ? "cursor: pointer;" : "", rest.style)}
		onclick={href ? () => window.open(href, target) : rest.onclick}
	>
		{@render children?.()}
	</div>
{/snippet}

{#if glowOnHover}
	<div use:glowOnHoverAction>
		{@render component()}
	</div>
{:else}
	{@render component()}
{/if}

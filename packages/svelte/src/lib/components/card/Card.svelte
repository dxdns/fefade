<script lang="ts">
	import type {
		HTMLAttributeAnchorTarget,
		HTMLAttributes
	} from "svelte/elements"
	import { classMapUtil, mergeStyleUtil } from "@feflow/core/utils"
	import { glowOnHoverAction } from "@feflow/core/actions"
	import type { CardType } from "@feflow/core/types"
	import styles from "@feflow/core/styles/Card.module.css"

	interface Props
		extends Omit<HTMLAttributes<HTMLDivElement>, "color">,
			CardType {
		target?: HTMLAttributeAnchorTarget
	}

	let {
		class: className = "",
		isTranslucent = false,
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
			styles.card,
			{
				[styles.isTranslucent]: isTranslucent
			}
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

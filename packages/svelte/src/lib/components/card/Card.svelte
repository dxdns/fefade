<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import {
		classMapUtil,
		getPropValueUtil,
		handleClickUtil,
		mergeStyleUtil,
		normalizeSizeUtil
	} from "@dxdns/feflow-core/utils"
	import { glowOnHoverAction } from "@dxdns/feflow-core/actions"
	import type { CardType, HTMLAttrAnchor } from "@dxdns/feflow-core/types"
	import styles from "@dxdns/feflow-core/styles/Card.module.css"

	interface Props
		extends Omit<HTMLAttributes<HTMLDivElement>, "color">,
			CardType,
			HTMLAttrAnchor {}

	let {
		class: className = "",
		isTranslucent = false,
		glowOnHover = false,
		animatedBorder,
		variant = "outlined",
		href,
		target = "_self",
		download,
		children,
		...rest
	}: Props = $props()

	const width = getPropValueUtil<{ width?: string }, "width">(
		animatedBorder,
		"width",
		"1px"
	)

	const primaryColor = getPropValueUtil<
		{ primaryColor?: string },
		"primaryColor"
	>(animatedBorder, "primaryColor", "var(--ff-on-surface)")

	const secondaryColor = getPropValueUtil<
		{ secondaryColor?: string },
		"secondaryColor"
	>(animatedBorder, "secondaryColor", "var(--ff-border)")
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
				[styles.isTranslucent]: isTranslucent,
				[styles.animatedBorder]: Boolean(animatedBorder)
			}
		)}
		style={mergeStyleUtil(
			`--width: ${normalizeSizeUtil(width!)}`,
			`--primary: ${primaryColor};`,
			`--secondary: ${secondaryColor};`,
			rest.style
		)}
		onclick={(e) => {
			handleClickUtil({
				href,
				download,
				target,
				onClick: () => {
					rest.onclick?.(e)
				}
			})
		}}
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

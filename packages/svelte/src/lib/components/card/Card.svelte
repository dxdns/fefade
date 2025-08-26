<script lang="ts">
	import { Constants } from "@navnex-kit/core"
	import type { HTMLAttributes } from "svelte/elements"
	import {
		classMapUtil,
		getPropValueUtil,
		handleClickUtil,
		mergeStyleUtil,
		normalizeSizeUtil
	} from "@navnex-kit/core/utils"
	import { glowOnHoverAction } from "@navnex-kit/core/actions"
	import type { CardType, HTMLAttrAnchor } from "@navnex-kit/core/types"
	import styles from "@navnex-kit/core/styles/Card.module.css"

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

	const borderStopOnHover = getPropValueUtil<
		{ stopOnHover?: boolean },
		"stopOnHover"
	>(animatedBorder, "stopOnHover", false)

	const borderWidth = $derived(
		getPropValueUtil<{ width?: string }, "width">(
			animatedBorder,
			"width",
			"1px"
		)
	)

	const borderPrimaryColor = $derived(
		getPropValueUtil<{ primaryColor?: string }, "primaryColor">(
			animatedBorder,
			"primaryColor",
			Constants.themeColorVar.onSurface
		)
	)

	const borderSecondaryColor = $derived(
		getPropValueUtil<{ secondaryColor?: string }, "secondaryColor">(
			animatedBorder,
			"secondaryColor",
			Constants.themeColorVar.border
		)
	)
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
				[styles.animatedBorder]: Boolean(animatedBorder),
				[styles.stopOnHover]: Boolean(borderStopOnHover)
			}
		)}
		style={mergeStyleUtil(
			`--border-width: ${normalizeSizeUtil(borderWidth!)}`,
			`--primary: ${borderPrimaryColor};`,
			`--secondary: ${borderSecondaryColor};`,
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

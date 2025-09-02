<script setup lang="ts">
	import { Constants } from "@dxdns-kit/core"
	import type { CardType, HTMLAttrAnchor } from "@dxdns-kit/core/types"
	import {
		classMapUtil,
		getPropValueUtil,
		handleClickUtil,
		normalizeSizeUtil
	} from "@dxdns-kit/core/utils"
	import {
		computed,
		useAttrs,
		IntrinsicElementAttributes,
		CSSProperties
	} from "vue"
	import { glowOnHoverAction } from "@dxdns-kit/core/actions"
	import styles from "@dxdns-kit/core/styles/Card.module.css"
	import { useAction } from "@/utils"

	interface Props extends CardType, HTMLAttrAnchor {}

	const {
		isTranslucent = false,
		glowOnHover = false,
		animatedBorder = false,
		variant = "outlined",
		href,
		target = "_self",
		download
	} = defineProps<Props>()

	const attrs = useAttrs() as IntrinsicElementAttributes["div"]
	const emit = defineEmits(["click"])

	const borderStopOnHover = getPropValueUtil<
		{ stopOnHover?: boolean },
		"stopOnHover"
	>(animatedBorder, "stopOnHover", false)

	const borderWidth = computed(() =>
		getPropValueUtil<{ width?: string }, "width">(
			animatedBorder,
			"width",
			"1px"
		)
	)

	const borderPrimaryColor = computed(() =>
		getPropValueUtil<{ primaryColor?: string }, "primaryColor">(
			animatedBorder,
			"primaryColor",
			Constants.themeColorVar.onSurface
		)
	)

	const borderSecondaryColor = computed(() =>
		getPropValueUtil<{ secondaryColor?: string }, "secondaryColor">(
			animatedBorder,
			"secondaryColor",
			Constants.themeColorVar.border
		)
	)

	const computedClass = computed(() =>
		classMapUtil(
			attrs.class,
			[attrs.class, styles],
			[variant, styles],
			styles.card,
			{
				[styles.isTranslucent]: isTranslucent,
				[styles.animatedBorder]: Boolean(animatedBorder),
				[styles.stopOnHover]: Boolean(borderStopOnHover)
			}
		)
	)

	const cardStyle = computed(() => ({
		"--border-width": normalizeSizeUtil(borderWidth.value!),
		"--primary": borderPrimaryColor.value,
		"--secondary": borderSecondaryColor.value,
		...(attrs.style as CSSProperties)
	}))

	function handleClick(e: any) {
		handleClickUtil({
			href,
			download,
			target,
			onClick: () => {
				emit("click", e)
			}
		})
	}

	const actionRef = glowOnHover ? useAction(glowOnHoverAction) : undefined
</script>

<template>
	<div ref="actionRef">
		<div
			v-bind="attrs"
			role="button"
			:class="computedClass"
			:style="cardStyle"
			@click="handleClick"
		>
			<slot />
		</div>
	</div>
</template>

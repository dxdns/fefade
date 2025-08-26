<script setup lang="ts">
	import { computed, useAttrs, IntrinsicElementAttributes } from "vue"
	import { classMapUtil, handleClickUtil } from "@navnex-kit/core/utils"
	import type { ButtonType, HTMLAttrAnchor } from "@navnex-kit/core/types"
	import styles from "@navnex-kit/core/styles/Button.module.css"
	import { Spinner } from "../spinner"

	interface Props extends ButtonType, HTMLAttrAnchor {}

	const {
		pressedEffect = true,
		variant = "contained",
		isLoading = false,
		roundedFull = false,
		size = "sm",
		href,
		target = "_self",
		download
	} = defineProps<Props>()

	const attrs = useAttrs() as IntrinsicElementAttributes["button"]

	const computedClass = computed(() => {
		return classMapUtil(
			attrs.class,
			[attrs.class, styles],
			[variant, styles],
			[size, styles],
			styles.button,
			{
				["roundedFull"]: roundedFull,
				[styles.pressedEffect]: pressedEffect
			}
		)
	})

	const emit = defineEmits(["click"])

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
</script>

<template>
	<button
		v-bind="attrs"
		:class="computedClass"
		:type="attrs.type ?? 'button'"
		@click="handleClick"
	>
		<Spinner v-if="isLoading" :size="size" />
		<slot />
	</button>
</template>

<script setup lang="ts">
	import { computed, useAttrs, IntrinsicElementAttributes } from "vue"
	import { classMapUtil } from "@feflow-ui/core/utils"
	import type { ButtonType, HTMLAttrAnchor } from "@feflow-ui/core/types"
	import styles from "@feflow-ui/core/styles/Button.module.css"
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

	function handleClick(event: MouseEvent) {
		if (download && href) {
			const a = document.createElement("a")
			a.href = href
			a.download = download
			document.body.appendChild(a)
			a.click()
			document.body.removeChild(a)
		} else if (href) {
			window.open(href, target)
		} else {
			emit("click", event)
		}
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

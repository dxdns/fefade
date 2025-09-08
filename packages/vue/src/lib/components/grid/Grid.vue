<script setup lang="ts">
	import {
		computed,
		CSSProperties,
		IntrinsicElementAttributes,
		useAttrs
	} from "vue"
	import { classMapUtil, normalizeSizeUtil } from "@dxdns-kit/core/utils"
	import type { GridType } from "@dxdns-kit/core/types"
	import styles from "@dxdns-kit/core/styles/Grid.module.css"

	interface Props extends GridType {}

	const {
		variant,
		columns = "auto-fit",
		gap = "0.75rem",
		minWidth = "12.5rem",
		maxWidth = "1fr"
	} = defineProps<Props>()

	const attrs = useAttrs() as IntrinsicElementAttributes["div"]

	const computedClass = computed(() =>
		classMapUtil(
			attrs.class,
			[attrs.class, styles],
			[variant, styles],
			styles.grid
		)
	)

	const gridStyle = computed(() => ({
		"--columns": columns,
		"--gap": normalizeSizeUtil(gap),
		"--min-width": normalizeSizeUtil(minWidth),
		"--max-width": normalizeSizeUtil(maxWidth),
		...(attrs.style as CSSProperties)
	}))
</script>

<template>
	<div v-bind="attrs" :class="computedClass" :style="gridStyle">
		<slot />
	</div>
</template>

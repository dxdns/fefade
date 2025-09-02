<script setup lang="ts">
	import { useAttrs, computed, IntrinsicElementAttributes } from "vue"
	import { classMapUtil } from "@dxdns-kit/core/utils"
	import styles from "@dxdns-kit/core/styles/Badge.module.css"
	import type { BadgeType } from "@dxdns-kit/core/types"

	interface Props extends BadgeType {}

	const {
		size = "xs",
		variant = "contained",
		roundedFull = false
	} = defineProps<Props>()

	const attrs = useAttrs() as IntrinsicElementAttributes["div"]

	const computedClass = computed(() =>
		classMapUtil(
			attrs.class,
			[attrs.class, styles],
			styles.badge,
			[size, styles],
			[variant, styles],
			{
				[styles.roundedFull]: roundedFull
			}
		)
	)
</script>

<template>
	<span v-bind="attrs" :class="computedClass">
		<slot />
	</span>
</template>

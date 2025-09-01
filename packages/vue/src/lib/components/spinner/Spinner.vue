<script setup lang="ts">
	import { computed, useAttrs, IntrinsicElementAttributes } from "vue"
	import { classMapUtil } from "@feflow-ui/core/utils"
	import type { SpinnerType } from "@feflow-ui/core/types"
	import styles from "@feflow-ui/core/styles/Spinner.module.css"

	interface Props extends SpinnerType {}

	const { size } = defineProps<Props>()
	const attrs = useAttrs() as IntrinsicElementAttributes["span"]

	const computedClass = computed(() => {
		return classMapUtil(
			attrs.class,
			[attrs.class, styles],
			[size, styles],
			styles.spinner
		)
	})
</script>

<template>
	<span v-bind="attrs" :class="computedClass" />
</template>

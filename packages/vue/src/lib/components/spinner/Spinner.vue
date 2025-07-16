<script setup lang="ts">
import {
	computed,
	toRefs,
	useAttrs,
	IntrinsicElementAttributes,
	ref
} from "vue"
import { classMapUtil } from "@dxdns/feflow-core/utils"
import type { SpinnerType } from "@dxdns/feflow-core/types"
import styles from "@dxdns/feflow-core/styles/Spinner.module.css"

interface Props extends SpinnerType {}

const props = defineProps<Props>()
const attrs = useAttrs() as IntrinsicElementAttributes["span"]

const { size = ref("sm") } = toRefs(props)

const computedClass = computed(() => {
	return classMapUtil(
		attrs.class,
		[attrs.class, styles],
		[size.value, styles],
		styles.spinner
	)
})
</script>

<template>
	<span v-bind="attrs" :class="computedClass"></span>
</template>

<script setup lang="ts">
	import { Spinner } from "@feflow-ui/vue"

	const colors = ["primary", "success", "warning", "error", "info"] as const
	const sizes = ["xs", "sm", "md", "lg", "xl"] as const
</script>

<template>
	<div
		style="display: flex; flex-wrap: wrap; align-items: baseline; gap: 1.5rem"
	>
		<div
			v-for="color in colors"
			:key="`color-${color}`"
			style="display: flex; flex-direction: column; align-items: center"
		>
			<Spinner :class="`text-on-${color}`" size="md" />
			<span>{{ color }}</span>
		</div>

		<div
			v-for="size in sizes"
			:key="`size-${size}`"
			style="display: flex; flex-direction: column; align-items: center"
		>
			<Spinner :size="size" color="primary" />
			<span>{{ size }}</span>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { Constants } from "@fefade/core"
	import { Spinner } from "@fefade/vue"
</script>

<template>
	<div
		style="display: flex; flex-wrap: wrap; align-items: baseline; gap: 1.5rem"
	>
		<div
			v-for="color in Constants.statusColors"
			:key="`color-${color}`"
			style="display: flex; flex-direction: column; align-items: center"
		>
			<Spinner :class="`text-on-${color}`" size="md" />
			<span>{{ color }}</span>
		</div>

		<div
			v-for="size in Constants.sizes"
			:key="`size-${size}`"
			style="display: flex; flex-direction: column; align-items: center"
		>
			<Spinner :size="size" color="primary" />
			<span>{{ size }}</span>
		</div>
	</div>
</template>

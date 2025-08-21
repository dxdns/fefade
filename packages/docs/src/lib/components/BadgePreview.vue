<script setup lang="ts">
	import { Badge } from "@feflow-ui/vue"

	const variants = ["outlined", "contained"] as const
	const colors = ["error", "success", "warning", "info", "primary"] as const
	const sizes = ["xs", "sm", "md", "lg", "xl"] as const
</script>

<template>
	<div style="display: flex; flex-wrap: wrap; align-items: flex-end; gap: 1rem">
		<Badge
			v-for="color in colors"
			:key="color"
			:class="`bg-${color} text-on-${color}`"
			size="md"
		>
			{{ color }}
		</Badge>

		<Badge
			v-for="variant in variants"
			:key="variant"
			:variant="variant"
			size="md"
		>
			{{ variant }}
		</Badge>

		<Badge v-for="size in sizes" :key="size" :size="size" rounded-full>
			{{ size }}
		</Badge>
	</div>
</template>

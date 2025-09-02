<script setup lang="ts">
	import { Constants } from "@dxdns-kit/core"
	import { Badge } from "@dxdns-kit/vue"

	const badgeVariants = ["outlined", "contained"] as const
</script>

<template>
	<div style="display: flex; flex-wrap: wrap; align-items: flex-end; gap: 1rem">
		<Badge
			v-for="color in Constants.statusColors"
			:key="color"
			:class="`bg-${color} text-on-${color}`"
			size="md"
		>
			{{ color }}
		</Badge>

		<Badge
			v-for="variant in badgeVariants"
			:key="variant"
			:variant="variant"
			size="md"
		>
			{{ variant }}
		</Badge>

		<Badge
			v-for="size in Constants.sizes"
			:key="size"
			:size="size"
			rounded-full
		>
			{{ size }}
		</Badge>
	</div>
</template>

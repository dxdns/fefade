<script setup lang="ts">
	import { reactive } from "vue"
	import { Badge, Button, themeConfig } from "@dxdns/feflow-vue"

	const theme = reactive(themeConfig())
</script>

<template>
	<div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center">
		<h2>{{ theme.mode }}</h2>
		<Button variant="outlined" @click="theme.toggle">toggle theme</Button>
	</div>
	<div
		:style="{ background: theme.mode === 'dark' ? 'green' : 'red' }"
		style="border-radius: 5px; padding: 1rem"
	>
		<ul style="line-height: 2">
			<li v-for="(color, key) in theme.colors" :key="key">
				<span style="color: aqua">{{ key }}</span
				>:
				<Badge :rounded-full="true" :style="{ background: color }" size="sm" />
			</li>
		</ul>
	</div>
</template>

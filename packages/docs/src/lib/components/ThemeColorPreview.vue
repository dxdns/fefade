<script setup lang="ts">
	import { reactive } from "vue"
	import { Badge, Button, themeConfig, Grid, Card } from "@dxdns-kit/vue"

	const theme = reactive(themeConfig())
</script>

<template>
	<div
		style="
			display: flex;
			flex-wrap: wrap;
			gap: 1rem;
			align-items: center;
			justify-content: flex-end;
		"
	>
		<Badge variant="outlined">
			<h4>{{ theme.mode }}</h4>
		</Badge>
		<Button variant="outlined" @click="theme.toggle">toggle theme</Button>
	</div>

	<Grid style="grid-auto-rows: 60px">
		<Card
			v-for="(v, k) in theme.colors"
			:key="k"
			:style="{
				background: v,
				margin: 0
			}"
		>
			<Badge
				style="
					position: absolute;
					top: 0;
					right: 0;
					margin: 0;
					border-top-right-radius: 0;
					border-bottom-right-radius: 0;
				"
			>
				{{ k }}
			</Badge>
			<Badge size="lg">{{ v }}</Badge>
		</Card>
	</Grid>
</template>

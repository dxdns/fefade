<script setup lang="ts">
	import { ref } from "vue"
	import { Card } from "@feflow-ui/vue"

	const borderWidth = ref(1)

	const cardVariants = ["contained", "outlined"] as const

	function handleClick() {
		borderWidth.value += 4
	}
</script>

<template>
	<Card v-for="variant in cardVariants" :key="variant" :variant="variant">
		<h2>{{ variant }}</h2>
	</Card>

	<Card :glow-on-hover="true">
		<h2>glow on hover</h2>
	</Card>

	<Card :animated-border="true">
		<h2>animated border</h2>
	</Card>

	<Card
		:animated-border="{
			width: `${borderWidth}px`,
			primaryColor: '#FF007F',
			secondaryColor: '#8000FF'
		}"
		style="cursor: pointer; user-select: none"
		@click="handleClick"
	>
		<h2>animated border - custom colors</h2>
	</Card>

	<Card
		:animated-border="{
			stopOnHover: true,
			width: '2px',
			primaryColor: '#39FF14',
			secondaryColor: '#00FFFF'
		}"
	>
		<h2>animated border - stop on hover</h2>
	</Card>
</template>

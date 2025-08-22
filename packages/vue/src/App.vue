<script setup lang="ts">
	import { ref } from "vue"
	import { Badge, Button, Card, Spinner, themeConfig } from "./lib"

	const { mode, toggle } = themeConfig()
	const borderWidth = ref(1)

	function handleClick() {
		borderWidth.value += 4
	}
</script>

<template>
	<br />
	<br />
	<Card
		:animated-border="{
			primaryColor: 'red',
			secondaryColor: 'green',
			width: `${borderWidth}px`
		}"
		style="cursor: pointer"
		@click="handleClick"
	>
		<h1>test</h1>
	</Card>
	<br />
	<br />
	<Card :glow-on-hover="true">
		<h1>glowOnHover</h1>
	</Card>
	<br />
	<br />
	<Badge>badge</Badge>
	<br />
	<br />
	<Spinner size="xl" />
	<h1>
		{{ mode }}
	</h1>
	<Button size="lg" variant="outlined" @click="toggle">toggle</Button>
	<br />
	<br />
	<Button :is-loading="true" size="lg">test</Button>
</template>

<style scoped></style>

<script setup lang="ts">
	import { Button, Spinner, themeConfig } from "./lib"

	const { mode, toggle } = themeConfig()
</script>

<template>
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

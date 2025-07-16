<script setup lang="ts">
import { Spinner, themeConfig } from "./lib"

const { mode, toggle } = themeConfig()
</script>

<template>
	<Spinner size="xl" />
	<h1>{{ mode }}</h1>
	<button @click="toggle">toggle</button>
</template>

<style scoped></style>

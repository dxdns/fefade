<script lang="ts">
	import { createTheme, NavnexProvider } from "@/index.js"

	let { children } = $props()

	const theme = createTheme({
		colors: { light: { bg: "white" } },
		breakpoints: { md: "800px" }
	})
</script>

<svelte:head>
	<title>navnex-kit + Svelte</title>
</svelte:head>

<NavnexProvider {theme} defaultThemeMode="light">
	{@render children()}
</NavnexProvider>

<!-- <style>
	:global(*) {
		margin: 0;
		padding: 0;
		outline: 0;
		appearance: none;
		border: none;
		text-decoration: none;
		list-style: none;
		box-sizing: border-box;
		scroll-behavior: smooth;
	}
</style> -->

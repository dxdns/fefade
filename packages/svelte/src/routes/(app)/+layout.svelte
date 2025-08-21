<script lang="ts">
	import { createTheme, FeflowProvider } from "@/index.js"

	let { children } = $props()

	const theme = createTheme({
		colors: { light: { bg: "white" } },
		breakpoints: { md: "800px" }
	})
</script>

<svelte:head>
	<title>Feflow UI + Svelte</title>
</svelte:head>

<FeflowProvider {theme} defaultThemeMode="light">
	{@render children()}
</FeflowProvider>

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

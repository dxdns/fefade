<script lang="ts">
	import { FeflowProvider } from "@dxdns/feflow"

	let { children } = $props()
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link
		rel="preconnect"
		href="https://fonts.gstatic.com"
		crossorigin="anonymous"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
		rel="stylesheet"
	/>

	<style>
		body {
			font-family: "Inter", sans-serif;
			line-height: 1.2;
			overflow-x: hidden;
		}
	</style>
</svelte:head>

<FeflowProvider>
	{@render children()}
</FeflowProvider>

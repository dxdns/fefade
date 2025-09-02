<script lang="ts">
	import { themeConfig, Navbar, Toaster } from "@/index.js"
	import { infoIcon } from "@feflow-ui/core/icons"

	let { children } = $props()

	const theme = $derived(themeConfig())
</script>

<Toaster />

<Navbar
	style="display: flex; align-items: center; justify-content: space-between;"
>
	<h1>ff</h1>
	<Navbar.Item onclick={theme.toggle}>
		<svg
			viewBox="0 -960 960 960"
			style="
			display: inline-block; 
			vertical-align: middle;
			fill: currentColor;
			width: 24px;
			height: 24px;
			"
		>
			<path d={infoIcon}></path>
		</svg>

		Toggle Theme
	</Navbar.Item>
</Navbar>
{@render children()}

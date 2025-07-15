<script lang="ts">
	import { InfoIcon } from "@/icons/index.js"
	import { themeConfig, Navbar, Toaster } from "@/index.js"

	let { children } = $props()

	const theme = $derived(themeConfig())
</script>

<Toaster />

<Navbar
	style="display: flex; align-items: center; justify-content: space-between;"
>
	<h1>ff</h1>
	<Navbar.Item onclick={theme.toggle}>
		<InfoIcon />
		Toggle Theme
	</Navbar.Item>
</Navbar>
{@render children()}

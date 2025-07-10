<script lang="ts">
	import { InfoIcon } from "@lib/icons/index.js"
	import { themeConfig, Navbar, Toaster } from "@lib/index.js"

	let { children } = $props()

	const theme = $derived(themeConfig())
</script>

<Toaster />

<Navbar
	style="display: flex; align-items: center; justify-content: space-between;"
>
	<img alt="feflow" src="/logo.png" width="180px" height="50px" />
	<Navbar.Item onclick={theme.toggle}>
		<InfoIcon />
		Toggle Theme
	</Navbar.Item>
</Navbar>
{@render children()}

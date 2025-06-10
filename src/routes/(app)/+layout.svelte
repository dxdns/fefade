<script lang="ts">
	import { customThemeConfig, FeflowProvider } from "@/lib/index.js"

	let { children } = $props()

	const customTheme = customThemeConfig({
		colors: { light: { colorBg: "orange" } }
	})
</script>

<FeflowProvider {customTheme} defaultMode="dark">
	{@render children()}
</FeflowProvider>

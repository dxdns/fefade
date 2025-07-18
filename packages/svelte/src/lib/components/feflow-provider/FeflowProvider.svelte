<script lang="ts">
	import { onMount, type Snippet } from "svelte"
	import { Constants } from "@dxdns/feflow-core"
	import type { ThemeConfigType, ThemeModeType } from "@dxdns/feflow-core/types"
	import { providerUtil } from "@dxdns/feflow-core/utils"
	import { themeConfigState } from "../../states/index.js"
	import rawStyle from "@dxdns/feflow-core/styles/FeflowProvider.css?raw"

	interface Props {
		/** @deprecated Use `theme` instead */
		customTheme?: ThemeConfigType

		theme?: ThemeConfigType

		/** @deprecated Use `defaultThemeMode` instead */
		defaultMode?: ThemeModeType

		defaultThemeMode?: ThemeModeType
		children: Snippet<[]>
	}

	let {
		customTheme,
		theme,
		defaultMode = "light",
		defaultThemeMode = "light",
		children
	}: Props = $props()

	const provider = providerUtil()
	const scriptString = provider.script(defaultThemeMode ?? defaultMode)
	const styleString = provider.style(theme ?? customTheme, rawStyle)
	const themeConfig = themeConfigState()

	function switchTheme() {
		const themeMode = provider.storedTheme()
		themeConfig.setThemeMode(themeMode)
	}

	onMount(() => {
		switchTheme()
	})
</script>

<svelte:head>
	<meta name={Constants.META_NAME} content={Constants.APP_NAME} />
	{@html scriptString}
	{@html styleString}
</svelte:head>

{@render children?.()}

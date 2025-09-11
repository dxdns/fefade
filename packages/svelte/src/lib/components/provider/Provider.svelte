<script lang="ts">
	import { onMount, type Snippet } from "svelte"
	import { Constants } from "@dxdns-kit/core"
	import type { ThemeConfigType, ThemeModeType } from "@dxdns-kit/core/types"
	import { providerUtil } from "@dxdns-kit/core/utils"
	import { themeConfigState } from "../../states/index.js"
	import rawStyle from "@dxdns-kit/core/styles/Provider.css?raw"

	interface Props {
		theme?: ThemeConfigType
		defaultThemeMode?: ThemeModeType
		children: Snippet<[]>
	}

	let { theme, defaultThemeMode = "light", children }: Props = $props()

	const provider = providerUtil()
	const scriptString = provider.script(defaultThemeMode)
	const styleString = provider.style(theme, rawStyle)
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

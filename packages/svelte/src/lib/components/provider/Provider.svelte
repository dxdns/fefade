<script lang="ts">
	import { onMount, type Snippet } from "svelte"
	import { Constants } from "@fefade/core"
	import type { ThemeConfigType, ThemeModeType } from "@fefade/core/types"
	import { providerUtil } from "@fefade/core/utils"
	import { themeConfigState } from "../../states/index.js"
	import rawStyle from "@fefade/core/styles/Provider.css?raw"

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

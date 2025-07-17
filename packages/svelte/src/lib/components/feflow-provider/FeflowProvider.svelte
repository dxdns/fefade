<script lang="ts">
	import { onDestroy, onMount, type Snippet } from "svelte"
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

	let observer: MutationObserver | undefined = undefined

	const ffProvider = providerUtil()
	const scriptString = ffProvider.script(defaultThemeMode ?? defaultMode)
	const styleString = ffProvider.style(theme ?? customTheme, rawStyle)
	const themeConfig = themeConfigState()

	onMount(() => {
		const el = document.documentElement
		if (el) {
			observer = ffProvider.attrObserver(el, () => {
				const themeMode = ffProvider.storedTheme()
				themeConfig.setThemeMode(themeMode)
			})
		}
	})

	onDestroy(() => {
		if (observer) {
			observer.disconnect()
		}
	})
</script>

<svelte:head>
	<meta name={Constants.META_NAME} content={Constants.APP_NAME} />
	{@html scriptString}
	{@html styleString}
</svelte:head>

{@render children?.()}

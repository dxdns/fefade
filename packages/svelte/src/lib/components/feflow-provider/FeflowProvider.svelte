<script lang="ts">
	import { onDestroy, onMount, type Snippet } from "svelte"
	import { Constants } from "@feflow/core"
	import type {
		BreakpointType,
		ThemeConfigType,
		ThemeModeType
	} from "../../types/index.js"
	import {
		mergeObjectUtil,
		themeConfigUtil,
		themeModeUtil
	} from "@feflow/core/utils"
	import { themeConfigState } from "../../states/index.js"
	import rawStyle from "@feflow/core/styles/FeflowProvider.css?raw"
	void rawStyle

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

	let observer: MutationObserver | undefined = $state()

	const { themeConfigToCssString, breakpointConfigToCssString } =
		themeConfigUtil()

	const themeStyle = themeConfigToCssString(
		mergeObjectUtil(
			Constants.themeConfigDefault,
			customTheme?.colors || theme?.colors || {}
		) as ThemeConfigType
	)

	const breakpointStyle = breakpointConfigToCssString(
		mergeObjectUtil(
			Constants.breakpoints,
			customTheme?.breakpoints || theme?.breakpoints || {}
		) as Record<BreakpointType, string>
	)

	const { getThemeModeFromAttr } = themeModeUtil()
	const themeConfig = themeConfigState()

	onMount(() => {
		const themeMode = getThemeModeFromAttr()
		themeConfig.setThemeMode(themeMode)

		observer = new MutationObserver((records) => {
			for (const mutation of records) {
				if (
					mutation.type === "attributes" &&
					mutation.attributeName === Constants.THEME_ATTR
				) {
					const themeMode = getThemeModeFromAttr()
					themeConfig.setThemeMode(themeMode)
				}
			}
		})

		const rootElement = document.documentElement
		observer.observe(rootElement, {
			attributes: true,
			attributeFilter: [Constants.THEME_ATTR]
		})
	})

	onDestroy(() => {
		observer?.disconnect()
	})
</script>

<svelte:head>
	<meta name="x-library-name" content="feflow" />

	{@html `
	<script>
		(function () {
			const theme = localStorage.getItem("${Constants.THEME_STORAGE}") || "${defaultMode ?? defaultThemeMode}";
			document.documentElement.setAttribute("${Constants.THEME_ATTR}", theme);
			document.documentElement.style.colorScheme = theme;
		})()
	</script>
	`}

	{@html themeStyle}
	{@html breakpointStyle}

	{@html `<style>${rawStyle}</style>`}
</svelte:head>

{@render children?.()}

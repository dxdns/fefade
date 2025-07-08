<script lang="ts">
	import { onDestroy, onMount, type Snippet } from "svelte"
	import { Constants } from "@dxdns/feflow-core"
	import type {
		BreakpointType,
		ThemeConfigType,
		ThemeModeType
	} from "../../types/index.js"
	import {
		mergeObjectUtil,
		themeConfigUtil,
		themeModeUtil
	} from "@dxdns/feflow-core/utils"
	import { themeConfigState } from "../../states/index.js"

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

	<style>
		body {
			background: var(--ff-bg);
			color: var(--ff-text);
		}

		/** text **/

		.text-primary {
			color: var(--ff-primary) !important;
		}

		.text-on-primary {
			color: var(--ff-on-primary) !important;
		}

		.text-secondary {
			color: var(--ff-secondary) !important;
		}

		.text-on-secondary {
			color: var(--ff-on-secondary) !important;
		}

		.text {
			color: var(--ff-text) !important;
		}

		.text-muted {
			color: var(--ff-text-muted) !important;
		}

		.text-on-bg {
			color: var(--ff-on-bg) !important;
		}

		.text-on-surface {
			color: var(--ff-on-surface) !important;
		}

		.text-on-disabled {
			color: var(--ff-on-disabled) !important;
		}

		/** bg **/

		.bg-primary {
			background: var(--ff-primary) !important;
		}

		.bg-secondary {
			background: var(--ff-secondary) !important;
		}

		.bg-page {
			background: var(--ff-bg) !important;
		}

		.bg-surface {
			background: var(--ff-surface) !important;
		}

		.bg-disabled {
			background: var(--ff-disabled) !important;
		}

		.bg-0 {
			background: none !important;
		}

		/** border **/

		.border {
			border-color: var(--ff-border) !important;
		}

		.border-0 {
			border: none !important;
			border-radius: 0 !important;
		}

		/** bg **/

		.bg-success {
			background: var(--ff-success) !important;
		}

		.bg-error,
		.bg-danger {
			background: var(--ff-error) !important;
		}

		.bg-warning {
			background: var(--ff-warning) !important;
		}

		.bg-info {
			background: var(--ff-info) !important;
		}

		/** hover bg **/
		.hover-bg-success:hover {
			background: var(--ff-success) !important;
		}

		.hover-bg-error:hover,
		.hover-bg-danger:hover {
			background: var(--ff-error) !important;
		}

		.hover-bg-warning:hover {
			background: var(--ff-warning) !important;
		}

		.hover-bg-info:hover {
			background: var(--ff-info) !important;
		}

		/** text **/

		.text-on-success {
			color: var(--ff-on-success) !important;
		}

		.text-on-error,
		.text-on-danger {
			color: var(--ff-on-error) !important;
		}

		.text-on-warning {
			color: var(--ff-on-warning) !important;
		}

		.text-on-info {
			color: var(--ff-on-info) !important;
		}

		/** hover text **/

		.hover-text-on-success:hover {
			color: var(--ff-on-success) !important;
		}

		.hover-text-on-error:hover,
		.hover-text-on-danger:hover {
			color: var(--ff-on-error) !important;
		}

		.hover-text-on-warning:hover {
			color: var(--ff-on-warning) !important;
		}

		.hover-text-on-info:hover {
			color: var(--ff-on-info) !important;
		}

		/** border **/

		.border-on-success {
			border-color: var(--ff-on-success) !important;
		}

		.border-on-error,
		.border-on-danger {
			border-color: var(--ff-on-error) !important;
		}

		.border-on-warning {
			border-color: var(--ff-on-warning) !important;
		}

		.border-on-info {
			border-color: var(--ff-on-info) !important;
		}

		.roundedFull,
		.rounded-full {
			border-radius: 9999px !important;
		}

		/** hover border **/

		.hover-border-on-success:hover {
			border-color: var(--ff-on-success) !important;
		}

		.hover-border-on-error:hover,
		.hover-border-on-danger:hover {
			border-color: var(--ff-on-error) !important;
		}

		.hover-border-on-warning:hover {
			border-color: var(--ff-on-warning) !important;
		}

		.hover-border-on-info:hover {
			border-color: var(--ff-on-info) !important;
		}
	</style>
</svelte:head>

{@render children?.()}

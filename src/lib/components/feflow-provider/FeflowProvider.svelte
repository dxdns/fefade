<script lang="ts">
	import { onMount, type Snippet } from "svelte"
	import * as Constants from "../../constants.js"
	import type {
		CustomThemeConfigType,
		ThemeConfigType,
		ThemeModeType
	} from "../../types/index.js"
	import {
		mergeObjectUtil,
		themeConfigUtil,
		themeModeUtil
	} from "../../utils/index.js"
	import { themeConfigState } from "../../states/index.js"

	interface Props {
		customTheme?: CustomThemeConfigType
		defaultMode?: ThemeModeType
		children: Snippet<[]>
	}

	let { customTheme, defaultMode = "light", children }: Props = $props()

	const newTheme = mergeObjectUtil(
		Constants.themeConfigDefault,
		customTheme || {}
	) as ThemeConfigType

	const { themeConfigToCssString } = themeConfigUtil()
	const style = themeConfigToCssString(newTheme)

	const { getThemeModeFromAttr } = themeModeUtil()
	const themeConfig = themeConfigState()

	onMount(() => {
		const themeMode = getThemeModeFromAttr()
		themeConfig.setThemeMode(themeMode)
	})
</script>

<svelte:head>
	<meta name="x-library-name" content="feflow" />

	{@html `
	<script>
		(function () {
			const theme = localStorage.getItem("${Constants.THEME_STORAGE}") || "${defaultMode}";
			document.documentElement.setAttribute("${Constants.THEME_ATTR}", theme);
			document.documentElement.style.colorScheme = theme;
		})()
	</script>
	`}

	{@html style}

	<style>
		body {
			background: var(--ff-bg);
			color: var(--ff-text);
		}

		/** text **/

		.text-primary {
			color: var(--ff-primary);
		}

		.text-on-primary {
			color: var(--ff-on-primary);
		}

		.text-secondary {
			color: var(--ff-secondary);
		}

		.text-on-secondary {
			color: var(--ff-on-secondary);
		}

		.text {
			color: var(--ff-text);
		}

		.text-muted {
			color: var(--ff-text-muted);
		}

		.text-on-bg {
			color: var(--ff-on-bg);
		}

		.text-on-surface {
			color: var(--ff-on-surface);
		}

		.text-on-disabled {
			color: var(--ff-on-disabled);
		}

		/** bg **/

		.bg-primary {
			background: var(--ff-primary);
		}

		.bg-secondary {
			background: var(--ff-secondary);
		}

		.bg-page {
			background: var(--ff-bg);
		}

		.bg-surface {
			background: var(--ff-surface);
		}

		.bg-disabled {
			background: var(--ff-disabled);
		}

		.bg-0 {
			background: none;
		}

		/** border **/

		.border {
			border-color: var(--ff-border);
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

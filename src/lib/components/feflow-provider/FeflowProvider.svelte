<script lang="ts">
	import { onMount, type Snippet } from "svelte"
	import {
		themeConfigDefault,
		THEME_STORAGE,
		THEME_ATTR
	} from "../../constants.js"
	import { setThemeConfigContext } from "../../contexts/index.js"
	import type { ThemeConfigType, ThemeModeType } from "../../types/index.js"
	import {
		mergeObjectUtil,
		themeConfigUtil,
		themeModeUtil
	} from "../../utils/index.js"
	import { themeModeState } from "../../states/index.js"

	interface Props {
		customTheme?: ThemeConfigType
		defaultMode?: ThemeModeType
		children: Snippet<[]>
	}

	let { customTheme, defaultMode = "light", children }: Props = $props()

	const theme = mergeObjectUtil(
		themeConfigDefault,
		customTheme || {}
	) as ThemeConfigType

	setThemeConfigContext(theme)

	const { themeConfigToCssString } = themeConfigUtil()
	const style = themeConfigToCssString(theme)

	const { getThemeModeFromAttr } = themeModeUtil()
	const _themeModeState = themeModeState()

	onMount(() => {
		const themeModeFromAttr = getThemeModeFromAttr()
		_themeModeState.setThemeMode(themeModeFromAttr)
	})
</script>

<svelte:head>
	<meta name="x-library-name" content="feflow" />

	{@html `
	<script>
		(function () {
			const theme = localStorage.getItem("${THEME_STORAGE}") || "${defaultMode}";
			document.documentElement.setAttribute("${THEME_ATTR}", theme);
			document.documentElement.style.colorScheme = theme;
		})()
	</script>
	`}

	{@html style}

	<style>
		body {
			background: var(--ff-color-bg);
			color: var(--ff-color-text);
		}

		/** text **/

		.text-primary {
			color: var(--ff-color-primary);
		}

		.text-on-primary {
			color: var(--ff-color-on-primary);
		}

		.text-secondary {
			color: var(--ff-color-secondary);
		}

		.text-on-secondary {
			color: var(--ff-color-on-secondary);
		}

		.text {
			color: var(--ff-color-text);
		}

		.text-muted {
			color: var(--ff-color-text-muted);
		}

		.text-on-bg {
			color: var(--ff-color-on-bg);
		}

		.text-on-surface {
			color: var(--ff-color-on-surface);
		}

		.text-on-disabled {
			color: var(--ff-color-on-disabled);
		}

		.text-on-focus {
			color: var(--ff-color-on-focus);
		}

		/** bg **/

		.bg-primary {
			background: var(--ff-color-primary);
		}

		.bg-secondary {
			background: var(--ff-color-secondary);
		}

		.bg-page {
			background: var(--ff-color-bg);
		}

		.bg-surface {
			background: var(--ff-color-surface);
		}

		.bg-disabled {
			background: var(--ff-color-disabled);
		}

		.bg-focus {
			background: var(--ff-color-focus);
		}

		.bg-0 {
			background: none;
		}

		/** border **/

		.border {
			border-color: var(--ff-color-border);
		}

		.border-0 {
			border: none !important;
			border-radius: 0 !important;
		}

		/* status colors */

		[data-theme="light"] {
			--ff-color-success: #a7eac1;
			--ff-color-on-success: #004422;
			--ff-color-error: #f9b1b1;
			--ff-color-on-error: #661111;
			--ff-color-warning: #fde6b0;
			--ff-color-on-warning: #5a3d00;
			--ff-color-info: #a7dffc;
			--ff-color-on-info: #003344;
		}

		[data-theme="dark"] {
			--ff-color-success: #004422;
			--ff-color-on-success: #a7eac1;
			--ff-color-error: #661111;
			--ff-color-on-error: #f9b1b1;
			--ff-color-warning: #5a3d00;
			--ff-color-on-warning: #fde6b0;
			--ff-color-info: #003344;
			--ff-color-on-info: #a7dffc;
		}

		/** bg **/

		.bg-success {
			background: var(--ff-color-success) !important;
		}

		.bg-error,
		.bg-danger {
			background: var(--ff-color-error) !important;
		}

		.bg-warning {
			background: var(--ff-color-warning) !important;
		}

		.bg-info {
			background: var(--ff-color-info) !important;
		}

		/** hover bg **/
		.hover-bg-success:hover {
			background: var(--ff-color-success) !important;
		}

		.hover-bg-error:hover,
		.hover-bg-danger:hover {
			background: var(--ff-color-error) !important;
		}

		.hover-bg-warning:hover {
			background: var(--ff-color-warning) !important;
		}

		.hover-bg-info:hover {
			background: var(--ff-color-info) !important;
		}

		/** text **/

		.text-on-success {
			color: var(--ff-color-on-success) !important;
		}

		.text-on-error,
		.text-on-danger {
			color: var(--ff-color-on-error) !important;
		}

		.text-on-warning {
			color: var(--ff-color-on-warning) !important;
		}

		.text-on-info {
			color: var(--ff-color-on-info) !important;
		}

		/** hover text **/

		.hover-text-on-success:hover {
			color: var(--ff-color-on-success) !important;
		}

		.hover-text-on-error:hover,
		.hover-text-on-danger:hover {
			color: var(--ff-color-on-error) !important;
		}

		.hover-text-on-warning:hover {
			color: var(--ff-color-on-warning) !important;
		}

		.hover-text-on-info:hover {
			color: var(--ff-color-on-info) !important;
		}

		/** border **/

		.border-on-success {
			border-color: var(--ff-color-on-success) !important;
		}

		.border-on-error,
		.border-on-danger {
			border-color: var(--ff-color-on-error) !important;
		}

		.border-on-warning {
			border-color: var(--ff-color-on-warning) !important;
		}

		.border-on-info {
			border-color: var(--ff-color-on-info) !important;
		}

		/** hover border **/

		.hover-border-on-success:hover {
			border-color: var(--ff-color-on-success) !important;
		}

		.hover-border-on-error:hover,
		.hover-border-on-danger:hover {
			border-color: var(--ff-color-on-error) !important;
		}

		.hover-border-on-warning:hover {
			border-color: var(--ff-color-on-warning) !important;
		}

		.hover-border-on-info:hover {
			border-color: var(--ff-color-on-info) !important;
		}
	</style>
</svelte:head>

{@render children?.()}

<script lang="ts" setup>
	import { ref, onMounted, provide, onUnmounted } from "vue"
	import { Constants } from "@dxdns/feflow-core"
	import { providerUtil } from "@dxdns/feflow-core/utils"
	import type {
		ThemeColorType,
		ThemeConfigType,
		ThemeModeType
	} from "@dxdns/feflow-core/types"
	import { ThemeConfigSymbol } from "../../symbols"
	// @ts-ignore
	import rawStyle from "@dxdns/feflow-core/styles/FeflowProvider.css?raw"

	interface Props {
		/** @deprecated Use `theme` instead */
		customTheme?: ThemeConfigType

		theme?: ThemeConfigType

		/** @deprecated Use `defaultThemeMode` instead */
		defaultMode?: ThemeModeType

		defaultThemeMode?: ThemeModeType
	}

	const props = defineProps<Props>()
	const {
		customTheme,
		theme,
		defaultMode = "light",
		defaultThemeMode = "light"
	} = props

	const mode = ref<ThemeModeType>("light")
	const colors = ref<ThemeColorType>(Constants.themeConfigDefault.light)

	const setThemeMode = (t: ThemeModeType) => {
		mode.value = t
		colors.value = Constants.themeConfigDefault[t]
	}

	const ffProvider = providerUtil()
	const styleString = ffProvider.style(theme ?? customTheme, rawStyle)

	let observer: MutationObserver | undefined = undefined

	function ffProviderScript() {
		const _storedTheme = ffProvider.storedTheme(defaultThemeMode ?? defaultMode)
		ffProvider.applyThemeMode(_storedTheme)
	}

	onMounted(() => {
		const meta = ffProvider.createMetaElement()
		document.head.appendChild(meta)

		ffProviderScript()

		const el = document.documentElement
		if (el) {
			observer = ffProvider.attrObserver(el, () => {
				const themeMode = ffProvider.storedTheme()
				setThemeMode(themeMode)
			})
		}

		onUnmounted(() => {
			document.head.removeChild(meta)
			if (observer) {
				observer.disconnect()
			}
		})
	})

	provide(ThemeConfigSymbol, {
		mode,
		colors,
		toggle: () => {
			ffProvider.toggleThemeMode((t) => {
				setThemeMode(t)
			})
		}
	})
</script>

<template>
	<div v-html="styleString" />
	<slot />
</template>

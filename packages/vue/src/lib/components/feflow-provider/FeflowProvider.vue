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
	const colors = ref<ThemeColorType>(Constants.themeColors.light)

	const setThemeMode = (t: ThemeModeType) => {
		mode.value = t
		colors.value = Constants.themeColors[t]
	}

	const provider = providerUtil()
	const styleString = provider.style(theme ?? customTheme, rawStyle)

	let observer: MutationObserver | undefined = undefined

	function providerScript() {
		const storedTheme = provider.storedTheme(defaultThemeMode ?? defaultMode)
		provider.applyThemeMode(storedTheme)
	}

	onMounted(() => {
		const meta = provider.createMetaElement()
		document.head.appendChild(meta)

		providerScript()

		const el = document.documentElement
		if (el) {
			observer = provider.attrObserver(el, () => {
				const themeMode = provider.storedTheme()
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
			provider.toggleThemeMode((t) => {
				setThemeMode(t)
			})
		}
	})
</script>

<template>
	<div v-html="styleString" />
	<slot />
</template>

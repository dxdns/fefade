<script setup lang="ts">
	import { ref, onMounted, provide, onUnmounted } from "vue"
	import { Constants } from "@navnex-kit/core"
	import { providerUtil } from "@navnex-kit/core/utils"
	import type {
		ThemeColorType,
		ThemeConfigType,
		ThemeModeType
	} from "@navnex-kit/core/types"
	import { ThemeConfigSymbol } from "../../symbols"
	// @ts-ignore
	import rawStyle from "@navnex-kit/core/styles/NavnexProvider.css?raw"

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

	function switchTheme() {
		const storedTheme = provider.storedTheme(defaultThemeMode ?? defaultMode)
		provider.applyThemeMode(storedTheme)
		setThemeMode(storedTheme)
	}

	onMounted(() => {
		const meta = provider.createMetaElement()
		document.head.appendChild(meta)

		switchTheme()

		onUnmounted(() => {
			document.head.removeChild(meta)
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

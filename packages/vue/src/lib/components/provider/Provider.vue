<script setup lang="ts">
	import { ref, onMounted, provide, onUnmounted } from "vue"
	import { Constants } from "@dxdns-kit/core"
	import { providerUtil } from "@dxdns-kit/core/utils"
	import type {
		ThemeColorType,
		ThemeConfigType,
		ThemeModeType
	} from "@dxdns-kit/core/types"
	import { ThemeConfigSymbol } from "../../symbols"
	// @ts-ignore
	import rawStyle from "@dxdns-kit/core/styles/Provider.css?raw"

	interface Props {
		theme?: ThemeConfigType
		defaultThemeMode?: ThemeModeType
	}

	const props = defineProps<Props>()
	const { theme, defaultThemeMode = "light" } = props

	const mode = ref<ThemeModeType>("light")
	const colors = ref<ThemeColorType>(Constants.themeColors.light)

	const setThemeMode = (t: ThemeModeType) => {
		mode.value = t
		colors.value = Constants.themeColors[t]
	}

	const provider = providerUtil()
	const styleString = provider.style(theme, rawStyle)

	function switchTheme() {
		const storedTheme = provider.storedTheme(defaultThemeMode)
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

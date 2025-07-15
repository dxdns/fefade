<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, provide, onUnmounted } from "vue"
import { Constants } from "@dxdns/feflow-core"
import {
	mergeObjectUtil,
	themeConfigUtil,
	themeModeUtil
} from "@dxdns/feflow-core/utils"
import type {
	BreakpointType,
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

const { getThemeModeFromAttr, toggleThemeMode } = themeModeUtil()

const { themeConfigToCssString, breakpointConfigToCssString } =
	themeConfigUtil()

const mergedColors = mergeObjectUtil(
	Constants.themeConfigDefault,
	customTheme?.colors || theme?.colors || {}
) as ThemeConfigType

const mergedBreakpoints = mergeObjectUtil(
	Constants.breakpoints,
	customTheme?.breakpoints || theme?.breakpoints || {}
) as Record<BreakpointType, string>

const themeStyle = themeConfigToCssString(mergedColors)
const breakpointStyle = breakpointConfigToCssString(mergedBreakpoints)

let observer: MutationObserver | null = null

function createStyleElement(css: string) {
	const style = document.createElement("style")
	style.textContent = css
	return style
}

function createMetaElement(name: string, content: string) {
	const meta = document.createElement("meta")
	meta.name = name
	meta.content = content
	return meta
}

onMounted(() => {
	const styleElement = createStyleElement(rawStyle)
	document.head.appendChild(styleElement)

	const metaElement = createMetaElement(Constants.META_NAME, Constants.APP_NAME)
	document.head.appendChild(metaElement)

	const fallbackTheme = defaultMode ?? defaultThemeMode
	const storedTheme = localStorage.getItem(Constants.THEME_STORAGE) || fallbackTheme
	document.documentElement.setAttribute(Constants.THEME_ATTR, storedTheme)
	document.documentElement.style.colorScheme = storedTheme
	setThemeMode(storedTheme as ThemeModeType)

	observer = new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (
				mutation.type === "attributes" &&
				mutation.attributeName === Constants.THEME_ATTR
			) {
				const newThemeMode = getThemeModeFromAttr()
				setThemeMode(newThemeMode)
			}
		}
	})

	observer.observe(document.documentElement, {
		attributes: true,
		attributeFilter: [Constants.THEME_ATTR]
	})

	onUnmounted(() => {
		styleElement.remove()
		metaElement.remove()
	})
})

onBeforeUnmount(() => {
	observer?.disconnect()
})

provide(ThemeConfigSymbol, {
	mode,
	colors,
	toggle: () => {
		toggleThemeMode((t) => {
			setThemeMode(t)
		})
	}
})
</script>

<template>
	<div v-html="themeStyle"></div>
	<div v-html="breakpointStyle"></div>
	<slot></slot>
</template>

import type { ThemeConfigType } from "./types/index.js"

export const APP_NAME = "feflow"
export const APP_NAME_ACRONYM = "ff"

export const CSS_VAR_PREFIX = `--${APP_NAME_ACRONYM}`
export const THEME_STORAGE = `${APP_NAME_ACRONYM}-theme`
export const TOAST_DEFAULT_DURATION = 3000
export const THEME_CONTEXT = `${APP_NAME_ACRONYM}-theme-ctx`

export const THEME_ATTR = "data-theme"
export const themeModeSelectors = {
	light: `[${THEME_ATTR}='light']`,
	dark: `[${THEME_ATTR}='dark']`
}

export const themeConfigDefault: ThemeConfigType = {
	colors: {
		light: {
			colorPrimary: "#18181b",
			colorOnPrimary: "#ffffff",
			colorSecondary: "#474747",
			colorOnSecondary: "#ffffff",
			colorText: "#272727",
			colorTextMuted: "#6b7280",
			colorBg: "#ffffff",
			colorOnBg: "#272727",
			colorSurface: "#f5f7fa",
			colorSurfaceVariant: "#f5f7fa80",
			colorOnSurface: "#272727",
			colorBorder: "#e5e7eb",
			colorDisabled: "#d1d5db",
			colorOnDisabled: "#6b7280",
			colorFocus: "#a7dffc80",
			colorOnFocus: "#003344",
			colorSkeleton: "lightgray",
			colorOnSkeleton: "#eee"
		},
		dark: {
			colorPrimary: "#fafafa",
			colorOnPrimary: "#18181b",
			colorSecondary: "#ddd",
			colorOnSecondary: "#474747",
			colorText: "#dbdbdb",
			colorTextMuted: "#78787f",
			colorBg: "#09090b",
			colorOnBg: "#f9fafb",
			colorSurface: "#101013",
			colorSurfaceVariant: "#10101380",
			colorOnSurface: "#f9fafb",
			colorBorder: "#27272a",
			colorDisabled: "#ffffff1f",
			colorOnDisabled: "#ffffff4d",
			colorFocus: "#a7dffcb3",
			colorOnFocus: "#a7dffc",
			colorSkeleton: "#40404080",
			colorOnSkeleton: "#404040"
		}
	}
}

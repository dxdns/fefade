import type { BreakpointType, ThemeConfigType } from "./types/index.js"

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

const gray = {
	50: "#fcfcfc",
	100: "#f9f9f9",
	200: "#f0f0f0",
	300: "#e5e5e5",
	400: "#d4d4d4",
	500: "#a3a3a3",
	600: "#737373",
	700: "#525252",
	800: "#404040",
	900: "#262626",
	950: "#171717",
	1000: "#0a0a0a"
}

const statusColors = {
	light: {
		success: "#22c55e",
		onSuccess: "#124a28",
		error: "#ef4444",
		onError: "#511111",
		warning: "#f97316",
		onWarning: "#6c2710",
		info: "#58c5fc91",
		onInfo: "#003344"
	},
	dark: {
		success: "#124a28",
		onSuccess: "#22c55e",
		error: "#511111",
		onError: "#ef4444",
		warning: "#6c2710",
		onWarning: "#f97316",
		info: "#0033449f",
		onInfo: "#a7dffc"
	}
}

export const themeConfigDefault: ThemeConfigType = {
	light: {
		primary: gray[1000],
		onPrimary: gray[50],
		secondary: gray[800],
		onSecondary: gray[50],
		text: gray[900],
		textMuted: gray[500],
		bg: gray[50],
		onBg: gray[900],
		surface: gray[200],
		surfaceVariant: "#aeaeae12",
		onSurface: gray[900],
		border: gray[300],
		disabled: gray[400],
		onDisabled: gray[600],
		skeleton: gray[300],
		onSkeleton: gray[100],
		overlay: "#00000066",
		shadow: "#0000001A",
		...statusColors.light
	},
	dark: {
		primary: gray[50],
		onPrimary: gray[1000],
		secondary: gray[400],
		onSecondary: gray[800],
		text: gray[200],
		textMuted: gray[500],
		bg: gray[1000],
		onBg: gray[200],
		surface: gray[900],
		surfaceVariant: "#3e3e3e3b",
		onSurface: gray[200],
		border: gray[700],
		disabled: `${gray[200]}33`,
		onDisabled: `${gray[300]}66`,
		skeleton: `${gray[700]}cc`,
		onSkeleton: gray[600],
		overlay: "#00000099",
		shadow: "#00000080",
		...statusColors.dark
	}
}

export const breakpoints: Record<BreakpointType | string, string> = {
	sm: "425px",
	md: "768px",
	lg: "1024px",
	xl: "1440px",
	"2xl": "2560px"
}

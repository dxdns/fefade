import type {
	BreakpointType,
	KebabType,
	AlignmentType,
	ThemeColorType,
	ThemeModeType,
	ThemeStatusColorType
} from "./types/index.js"
import { capitalizeUtil, toKebabCaseUtil } from "./utils/index.js"

export const APP_NAME = "dxdns-kit"
export const APP_NAME_ACRONYM = "dx"
export const META_NAME = "x-library-name"

export const CSS_VAR_PREFIX = `--${APP_NAME_ACRONYM}`
export const THEME_STORAGE = `${APP_NAME_ACRONYM}-theme`
export const TOAST_DEFAULT_DURATION = 3000
export const THEME_CONTEXT = `${APP_NAME_ACRONYM}-theme-ctx`

export const THEME_ATTR = "data-theme"
export const themeModeSelectors = {
	light: `[${THEME_ATTR}='light']`,
	dark: `[${THEME_ATTR}='dark']`
}

const themeStatusColors: Record<ThemeModeType, ThemeStatusColorType> = {
	light: {
		success: "#22c55e",
		onSuccess: "#124a28",
		error: "#ef4444",
		onError: "#511111",
		warning: "#f97316",
		onWarning: "#6c2710",
		info: "#58c5fcff",
		onInfo: "#003344"
	},
	dark: {
		success: "#124a28",
		onSuccess: "#22c55e",
		error: "#511111",
		onError: "#ef4444",
		warning: "#6c2710",
		onWarning: "#f97316",
		info: "#003344ff",
		onInfo: "#a7dffc"
	}
}

export const themeColors: Record<ThemeModeType, ThemeColorType> = {
	light: {
		primary: "#171717",
		onPrimary: "#fafafa",
		secondary: "#f5f5f5",
		onSecondary: "#171717",
		muted: "#a3a3a3",
		bg: "#ffffff",
		onBg: "#262626",
		surface: "#f8f8f8",
		onSurface: "#0a0a0a",
		border: "#e5e5e5",
		disabled: "#d4d4d4",
		onDisabled: "#737373",
		skeleton: "#e5e5e5",
		onSkeleton: "#f9f9f9",
		overlay: "#00000066",
		shadow: "#0000001A",
		...themeStatusColors.light
	},
	dark: {
		primary: "#e5e5e5",
		onPrimary: "#171717",
		secondary: "#262626",
		onSecondary: "#fafafa",
		muted: "#a3a3a3",
		bg: "#0a0a0a",
		onBg: "#fafafa",
		surface: "#171717",
		onSurface: "#fafafa",
		border: "#ffffff1a",
		disabled: "#f0f0f033",
		onDisabled: "#e5e5e566",
		skeleton: "#525252cc",
		onSkeleton: "#737373",
		overlay: "#00000099",
		shadow: "#00000080",
		...themeStatusColors.dark
	}
}

export const themeColorVar = Object.fromEntries(
	Object.keys(themeColors.light).map((key) => [
		key,
		`var(${CSS_VAR_PREFIX}-${toKebabCaseUtil(key)})`
	])
) as {
	[K in keyof ThemeColorType]: `var(${typeof CSS_VAR_PREFIX}-${KebabType<K & string>})`
}

export const statusOnColor = (color: string) => {
	return themeColorVar[
		`on${capitalizeUtil(color)}` as keyof typeof themeColorVar
	]
}

export const breakpoints: Record<BreakpointType | string, string> = {
	sm: "425px",
	md: "768px",
	lg: "1024px",
	xl: "1440px",
	"2xl": "2560px"
}

export const variants = ["contained", "outlined", "text"] as const
export const sizes = ["xs", "sm", "md", "lg", "xl"] as const
export const statusColors = ["success", "warning", "error", "info"] as const
export const statusVariants = ["pulse", "ping", "bounce"] as const
export const verticalPositions = ["top", "bottom"] as const
export const horizontalPositions = ["left", "right", "center"] as const
export const positions = [...verticalPositions, ...horizontalPositions] as const
export const alignments: AlignmentType[] = verticalPositions.flatMap((v) =>
	horizontalPositions.map((h) => `${v}-${h}` as AlignmentType)
)

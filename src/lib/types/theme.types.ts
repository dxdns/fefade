export type ThemeModeType = "dark" | "light"

type ThemeColorsType = {
	colorPrimary: string
	colorOnPrimary: string
	colorSecondary: string
	colorOnSecondary: string
	colorText: string
	colorTextMuted: string
	colorBg: string
	colorOnBg: string
	colorSurface: string
	colorSurfaceVariant: string
	colorOnSurface: string
	colorBorder: string
	colorDisabled: string
	colorOnDisabled: string
	colorFocus: string
	colorOnFocus: string
	colorSkeleton: string
	colorOnSkeleton: string
	colorSuccess: string
	colorOnSuccess: string
	colorError: string
	colorOnError: string
	colorWarning: string
	colorOnWarning: string
	colorInfo: string
	colorOnInfo: string
}

export type ThemeConfigType = {
	colors?: {
		light?: Partial<ThemeColorsType>
		dark?: Partial<ThemeColorsType>
	}
}

export type ThemeConfigContextType = {
	colors: {
		light: ThemeColorsType
		dark: ThemeColorsType
	}
}

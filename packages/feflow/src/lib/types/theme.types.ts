export type ThemeModeType = "dark" | "light"

export type ThemeColorsType = {
	primary: string
	onPrimary: string
	secondary: string
	onSecondary: string
	text: string
	textMuted: string
	bg: string
	onBg: string
	surface: string
	surfaceVariant: string
	onSurface: string
	border: string
	disabled: string
	onDisabled: string
	skeleton: string
	onSkeleton: string
	success: string
	onSuccess: string
	error: string
	onError: string
	warning: string
	onWarning: string
	info: string
	onInfo: string
	overlay: string
	shadow: string
}

export type ThemeConfigType = {
	light: ThemeColorsType
	dark: ThemeColorsType
}

export type CustomThemeConfigType = {
	colors: {
		light?: Partial<ThemeColorsType>
		dark?: Partial<ThemeColorsType>
	}
}

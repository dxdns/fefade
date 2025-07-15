import * as Constants from "../constants.js"
import type {
	ThemeModeType,
	ThemeConfigType,
	BreakpointType
} from "../types/index.js"

export default function themeConfigUtil() {
	function toCssVar(key: string): string {
		return `${Constants.CSS_VAR_PREFIX}-${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`
	}

	function toCssDeclaration(key: string, value: string): string {
		return `${toCssVar(key)}: ${value};`
	}

	function createStyle(
		selectors: string,
		declarations: string,
		id: string = crypto.randomUUID()
	): string {
		return `<style id=${id}>${selectors} {\n${declarations}\n}</style>\n`
	}

	function renderStyleBlock(
		vars: Record<string, any> | string,
		selectors: string
	): string {
		if (typeof vars === "string") return createStyle(selectors, vars)

		const declarations = Object.entries(vars)
			.map(([key, value]) => toCssDeclaration(key, value))
			.join("\n")

		return createStyle(selectors, declarations)
	}

	function themeConfigToCssString(theme?: ThemeConfigType): string {
		if (!theme) return ""

		return Object.entries(theme)
			.map(([mode, vars]) => {
				const selector = Constants.themeModeSelectors[mode as ThemeModeType]
				return selector && vars ? renderStyleBlock(vars, selector) : ""
			})
			.join("")
	}

	function breakpointConfigToCssString(
		breakpoint?: Record<BreakpointType, string>
	): string {
		if (!breakpoint) return ""

		const declarations = Object.entries(breakpoint)
			.map(([key, value]) => toCssDeclaration(key, value))
			.join(" ")

		return createStyle(":root", declarations)
	}

	return { themeConfigToCssString, breakpointConfigToCssString }
}

/** @deprecated Use `createTheme` instead */
export function customThemeConfig(t: ThemeConfigType) {
	return t
}

export function createTheme(t: ThemeConfigType) {
	return t
}

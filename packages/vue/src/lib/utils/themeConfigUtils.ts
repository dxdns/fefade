import { inject } from "vue"
import { ThemeConfigSymbol } from "../symbols"

export function useThemeConfig() {
	const symbol = inject(ThemeConfigSymbol)
	if (!symbol) {
		throw new Error("useThemeConfig must be used within a FeflowProvider")
	}
	return symbol
}

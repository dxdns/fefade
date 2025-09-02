import { inject } from "vue"
import { ThemeConfigSymbol } from "../symbols"

export default function themeConfigUtil() {
	const symbol = inject(ThemeConfigSymbol)
	if (!symbol) {
		throw new Error("themeConfigUtil must be used within a Provider")
	}
	return symbol
}

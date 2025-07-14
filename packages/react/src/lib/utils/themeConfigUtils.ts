import { ThemeConfigContext } from "../contexts"
import { useContext } from "react"

export function useThemeConfig() {
	const context = useContext(ThemeConfigContext)
	if (!context) {
		throw new Error("useThemeConfig must be used within a FeflowProvider")
	}
	return context
}

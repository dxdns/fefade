import { ThemeConfigContext } from "../contexts"
import { useContext } from "react"

export default function themeConfigUtil() {
	const context = useContext(ThemeConfigContext)
	if (!context) {
		throw new Error("themeConfigUtil must be used within a Provider")
	}
	return context
}

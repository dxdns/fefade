import type {
	ThemeColorsType,
	ThemeModeType
} from "../types/index.js"
import * as Constants from "../constants.js"

const data = $state<{
	mode: ThemeModeType
	colors: ThemeColorsType
}>({
	mode: "light",
	colors: Constants.themeConfigDefault.colors.light
})

export default function themeConfigState() {
	return {
		data,
		setThemeMode(t: ThemeModeType) {
			this.data.mode = t
			this.data.colors = Constants.themeConfigDefault.colors[t]
		}
	}
}

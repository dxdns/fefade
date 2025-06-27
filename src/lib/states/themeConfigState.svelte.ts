import type { ThemeColorsType, ThemeModeType } from "../types/index.js"
import * as Constants from "../constants.js"

let data = $state<{
	mode: ThemeModeType
	colors: ThemeColorsType
}>({
	mode: "light",
	colors: Constants.themeConfigDefault.colors.light
})

export default function themeConfigState() {
	return {
		_setMode(t: ThemeModeType) {
			data.mode = t
		},
		_setColors(t: ThemeModeType) {
			data.colors = Constants.themeConfigDefault.colors[t]
		},
		getMode() {
			return data.mode
		},
		getColors() {
			return Constants.themeConfigDefault.colors[this.getMode()]
		},
		setThemeMode(t: ThemeModeType) {
			this._setMode(t)
			this._setColors(t)
		}
	}
}

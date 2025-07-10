import type { ThemeColorType, ThemeModeType } from "../types/index.js"
import { Constants } from "@feflow/core"

let data = $state<{
	mode: ThemeModeType
	colors: ThemeColorType
}>({
	mode: "light",
	colors: Constants.themeConfigDefault.light
})

export default function themeConfigState() {
	return {
		_setMode(t: ThemeModeType) {
			data.mode = t
		},
		_setColors(t: ThemeModeType) {
			data.colors = Constants.themeConfigDefault[t]
		},
		getMode() {
			return data.mode
		},
		getColors() {
			return Constants.themeConfigDefault[this.getMode()]
		},
		setThemeMode(t: ThemeModeType) {
			this._setMode(t)
			this._setColors(t)
		}
	}
}

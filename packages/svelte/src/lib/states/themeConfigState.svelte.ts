import type { ThemeColorType, ThemeModeType } from "@navnex-kit/core/types"
import { Constants } from "@navnex-kit/core"

let data = $state<{
	mode: ThemeModeType
	colors: ThemeColorType
}>({
	mode: "light",
	colors: Constants.themeColors.light
})

export default function themeConfigState() {
	return {
		_setMode(t: ThemeModeType) {
			data.mode = t
		},
		_setColors(t: ThemeModeType) {
			data.colors = Constants.themeColors[t]
		},
		getMode() {
			return data.mode
		},
		getColors() {
			return Constants.themeColors[this.getMode()]
		},
		setThemeMode(t: ThemeModeType) {
			if (this.getMode() !== t) {
				this._setMode(t)
				this._setColors(t)
			}
		}
	}
}

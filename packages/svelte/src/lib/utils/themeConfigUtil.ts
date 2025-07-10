import { themeConfigState } from "../states/index.js"
import { themeModeUtil } from "@feflow/core/utils"

export default function themeConfigUtil() {
	const themeConfig = themeConfigState()
	const { toggleThemeMode } = themeModeUtil()
	return {
		colors: themeConfig.getColors(),
		mode: themeConfig.getMode(),
		toggle: () => {
			toggleThemeMode((t) => {
				themeConfig.setThemeMode(t)
			})
		}
	}
}

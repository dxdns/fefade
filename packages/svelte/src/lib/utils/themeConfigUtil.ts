import { themeConfigState } from "../states/index.js"
import { providerUtil } from "@fefade/core/utils"
import type { ThemeConfigUtilType } from "@fefade/core/types"

export default function themeConfigUtil(): ThemeConfigUtilType {
	const themeConfig = themeConfigState()
	const { toggleThemeMode } = providerUtil()
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

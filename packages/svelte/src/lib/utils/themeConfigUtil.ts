import { themeConfigState } from "../states/index.js"
import { providerUtil } from "@dxdns-kit/core/utils"
import type { ThemeConfigUtilType } from "@dxdns-kit/core/types"

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

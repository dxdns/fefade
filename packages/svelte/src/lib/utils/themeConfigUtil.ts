import { themeConfigState } from "../states/index.js"
import { providerUtil } from "@dxdns/feflow-core/utils"

export default function themeConfigUtil() {
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

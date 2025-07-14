import type { ThemeColorType, ThemeModeType } from "@dxdns/feflow-core/types"
import { createContext } from "react"

type ThemeConfigContextType = {
	mode: ThemeModeType
	colors: ThemeColorType
	toggle: () => void
}

export const ThemeConfigContext = createContext<
	ThemeConfigContextType | undefined
>(undefined)

import type { ThemeConfigUtilType } from "@dxdns/feflow-core/types"
import { createContext } from "react"

export const ThemeConfigContext = createContext<
	ThemeConfigUtilType | undefined
>(undefined)

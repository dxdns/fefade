import { createContext } from "react"
import type { ThemeConfigUtilType } from "@dxdns-kit/core/types"

export const ThemeConfigContext = createContext<
	ThemeConfigUtilType | undefined
>(undefined)

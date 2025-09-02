import type { ThemeConfigUtilType } from "@dxdns-kit/core/types"
import { createContext } from "react"

export const ThemeConfigContext = createContext<
	ThemeConfigUtilType | undefined
>(undefined)

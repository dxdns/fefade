import { createContext } from "react"
import type { ThemeConfigUtilType } from "@fefade/core/types"

export const ThemeConfigContext = createContext<
	ThemeConfigUtilType | undefined
>(undefined)

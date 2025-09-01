import type { ThemeConfigUtilType } from "@feflow-ui/core/types"
import { createContext } from "react"

export const ThemeConfigContext = createContext<
	ThemeConfigUtilType | undefined
>(undefined)

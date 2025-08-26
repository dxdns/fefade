import { Constants } from "@navnex-kit/core"
import type { ThemeColorType, ThemeModeType } from "@navnex-kit/core/types"
import { type InjectionKey, type Ref } from "vue"

export const ThemeConfigSymbol: InjectionKey<{
	mode: Ref<ThemeModeType>
	colors: Ref<ThemeColorType>
	toggle: () => void
}> = Symbol(Constants.THEME_CONTEXT)

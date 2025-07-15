import { Constants } from "@dxdns/feflow-core"
import type { ThemeColorType, ThemeModeType } from "@dxdns/feflow-core/types"
import { type InjectionKey, type Ref } from "vue"

export const ThemeConfigSymbol: InjectionKey<{
	mode: Ref<ThemeModeType>
	colors: Ref<ThemeColorType>
	toggle: () => void
}> = Symbol(Constants.THEME_CONTEXT)

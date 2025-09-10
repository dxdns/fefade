import { ActionEntryType } from "./action.types.js"
import { ColorType } from "./color.types.js"
import { VariantType } from "./variant.types.js"

export type SearchInputType = {
	variant?: VariantType
	color?: ColorType
	actions?: ActionEntryType<HTMLElement>[]
}

import { ActionEntryType } from "./action.types.js"
import { SizeType } from "./size.types.js"
import { VariantType } from "./variant.types.js"

export type TextFieldType = {
	label?: string
	variant?: VariantType
	focused?: boolean
	actions?: ActionEntryType<HTMLElement>[]
	size?: SizeType
}

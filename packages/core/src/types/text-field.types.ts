import { ActionEntryType } from "./action.types"
import { SizeType } from "./size.types"
import { VariantType } from "./variant.types"

export type TextFieldType = {
	label?: string
	variant?: VariantType
	focused?: boolean
	actions?: ActionEntryType<HTMLElement>[]
	size?: SizeType
}

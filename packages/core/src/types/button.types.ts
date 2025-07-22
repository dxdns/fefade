import { type SizeType } from "./size.types.js"
import { type VariantType } from "./variant.types.js"

export type ButtonType = {
	pressedEffect?: boolean
	variant?: VariantType
	isLoading?: boolean
	roundedFull?: boolean
	size?: SizeType
}

import { type SizeType } from "./size.types"
import { type VariantType } from "./variant.types"

export type ButtonType = {
	pressedEffect?: boolean
	variant?: VariantType
	isLoading?: boolean
	roundedFull?: boolean
	size?: SizeType
	href?: string
	download?: string
}

import { type SizeType } from "./size.types"
import { type VariantType } from "./variant.types"

export type BadgeType = {
	size?: SizeType
	variant?: Exclude<VariantType, "text">
	roundedFull?: boolean
}

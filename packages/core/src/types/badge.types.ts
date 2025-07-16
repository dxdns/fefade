import { type SizeType } from "./size.types.js"
import { type VariantType } from "./variant.types.js"

export type BadgeType = {
	size?: SizeType
	variant?: Exclude<VariantType, "text">
	roundedFull?: boolean
}

import { SizeType } from "./size.types.js"
import { VariantType } from "./variant.types.js"

export type NumberInputType = {
	variant?: VariantType
	value: number
	onChange?: (value: number) => void
	autoFocus?: boolean
	step?: number
	size?: SizeType
}

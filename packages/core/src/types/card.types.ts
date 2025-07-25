import { type VariantType } from "./variant.types.js"

export type CardType = {
	isTranslucent?: boolean
	glowOnHover?: boolean
	animatedBorder?:
		| boolean
		| {
				stopOnHover?: boolean
				width?: number | string
				primaryColor?: string
				secondaryColor?: string
		  }
	variant?: Exclude<VariantType, "text">
}

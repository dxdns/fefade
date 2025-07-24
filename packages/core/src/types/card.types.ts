import { type VariantType } from "./variant.types.js"

export type CardType = {
	isTranslucent?: boolean
	glowOnHover?: boolean
	animatedBorder?: boolean
	variant?: Exclude<VariantType, "text">
	href?: string
}

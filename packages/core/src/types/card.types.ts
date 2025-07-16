import { type VariantType } from "./variant.types.js"

export type CardType = {
	isTranslucent?: boolean
	glowOnHover?: boolean
	variant?: Exclude<VariantType, "text">
	href?: string
}

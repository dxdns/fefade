export type VariantStatusType = "none" | "ping" | "bounce" | "pulse"

export type StatusType = {
	variant?: VariantStatusType
	color?: string
	size?: number | string
}

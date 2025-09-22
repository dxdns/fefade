import { VariantType } from "./variant.types.js"

type ActiveStyleType<T = string> =
	| T
	| (({ isActive }: { isActive: boolean }) => T | undefined)

export type LinkType<S> = {
	class?: ActiveStyleType
	className?: ActiveStyleType
	pathname?: string
	hover?: "left" | "center" | "right" | "underlineNone"
	style?: ActiveStyleType<S>
	variant?: VariantType
}

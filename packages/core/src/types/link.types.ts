type ClassType =
	| string
	| (({ isActive }: { isActive: boolean }) => string | undefined)

export type LinkType = {
	class?: ClassType
	className?: ClassType
	pathname?: string
	hover?: "left" | "center" | "right" | "underlineNone"
}

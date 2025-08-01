type ClassType = string | (({ isActive }: { isActive: boolean }) => string)

export type LinkType = {
	class?: ClassType
	className?: ClassType
	pathname?: string

	/**
	 * @deprecated Use `hover` instead.
	 */
	hoverUnderline?: "left" | "center" | "right"
	hover?: "left" | "center" | "right" | "underlineNone"
}

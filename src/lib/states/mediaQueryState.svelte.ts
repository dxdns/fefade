import type { SizeType } from "../types/index.js"

type BreakpointType = Exclude<SizeType, "xs"> | "2xl"
type OperatorType = "min-width" | "max-width"

const breakpoints: Record<BreakpointType | string, string> = {
	sm: "425px",
	md: "768px",
	lg: "1024px",
	xl: "1440px",
	"2xl": "2560px"
}

export default function mediaQueryState(
	operator: OperatorType,
	size: BreakpointType | string
) {
	if (typeof window === "undefined") {
		return {
			get value() {
				return false
			},
			destroy() {}
		}
	}

	let data = $state(false)
	const query = `(${operator}: ${breakpoints[size as BreakpointType] ?? size})`
	const mediaQuery = window.matchMedia(query)

	function update() {
		data = mediaQuery.matches
	}

	update()

	mediaQuery.addEventListener("change", update)

	return {
		get value() {
			return data
		},
		destroy() {
			mediaQuery.removeEventListener("change", update)
		}
	}
}

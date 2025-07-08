import type { BreakpointType } from "../types/index.js"
import * as Constants from "../constants.js"

export default function mediaQueryState(
	operator: "min-width" | "max-width",
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
	const query = `(${operator}: ${Constants.breakpoints[size as BreakpointType] ?? size})`
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

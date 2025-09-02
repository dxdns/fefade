import { sizeToNumberUtil } from "@dxdns-kit/core/utils"
import type { BreakpointType } from "../types/index.js"
import { Constants } from "@dxdns-kit/core"

export default function mediaQueryState(
	operator: "min-width" | "max-width",
	size: BreakpointType | string,
	node?: HTMLElement
) {
	if (typeof window === "undefined" || typeof document === "undefined") {
		return {
			get value() {
				return false
			},
			destroy() {}
		}
	}

	let data = $state(false)

	const root = document.documentElement
	const el = node ?? root
	const sizeValue = getComputedStyle(root)
		.getPropertyValue(`${Constants.CSS_VAR_PREFIX}-${size}`)
		.trim()
	const breakpointValue =
		sizeValue || Constants.breakpoints[size as BreakpointType] || size

	const observer = new ResizeObserver((entries) => {
		for (const entry of entries) {
			const width = entry.contentRect.width
			data =
				operator === "min-width"
					? width >= sizeToNumberUtil(breakpointValue)
					: width <= sizeToNumberUtil(breakpointValue)
		}
	})

	$effect(() => {
		observer.observe(el)

		return () => {
			observer.disconnect()
		}
	})

	return {
		get value() {
			return data
		},
		destroy() {
			observer.disconnect()
		}
	}
}

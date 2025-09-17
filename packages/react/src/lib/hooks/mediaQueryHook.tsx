import type { MediaQueryType, BreakpointType } from "@fefade/core/types"
import { useEffect, useState } from "react"
import { sizeToNumberUtil } from "@fefade/core/utils"
import { Constants } from "@fefade/core"

export function mediaQueryHook(...args: MediaQueryType) {
	const [operator, size, node] = args

	const [data, setData] = useState(false)

	useEffect(() => {
		if (typeof window === "undefined" || typeof document === "undefined") {
			setData(false)
			return
		}

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
				setData(
					operator === "min-width"
						? width >= sizeToNumberUtil(breakpointValue)
						: width <= sizeToNumberUtil(breakpointValue)
				)
			}
		})

		observer.observe(el)

		return () => {
			observer.disconnect()
		}
	}, [operator, size, node])

	return data
}

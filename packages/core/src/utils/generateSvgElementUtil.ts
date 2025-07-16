import { SvgType } from "../types/index.js"
import toKebabCaseUtil from "./toKebabCaseUtil.js"

export default function generateSvgElementUtil({
	svgPath,
	width = "24px",
	height = "24px",
	fill = "currentColor",
	className = "",
	style = {},
	viewBox = "0 -960 960 960"
}: SvgType) {
	const styleString = (() => {
		if (typeof style === "string") return style

		const defaultStyles = {
			display: "inline-block",
			verticalAlign: "middle",
			width,
			height,
			fill
		}

		const combinedStyles = { ...defaultStyles, ...(style || {}) }

		return Object.entries(combinedStyles)
			.map(([key, value]) => `${toKebabCaseUtil(key)}:${value}`)
			.join(";")
	})()

	return `
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="${viewBox}"
		width="${width}"
		height="${height}"
		fill="${fill}"
		style="${styleString.trim()}"
		${className ? `class="${className}"` : ""}
	>
		<path d="${svgPath}" />
	</svg>
	`.trim()
}

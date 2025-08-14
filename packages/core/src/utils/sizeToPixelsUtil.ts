/**
 * Converts a CSS size string into a pixel string (e.g., "200px").
 * Supports: px, rem, em
 *
 * @param size - The input CSS size (e.g., "12.5rem", "30px")
 * @param baseFontSize - Root font size for rem/em units (default: 16)
 * @returns Converted size string in pixels (e.g., "200px")
 */
export default function sizeToPixelsUtil(size: string, baseFontSize = 16) {
	const match = size.match(/^(-?\d*\.?\d+)([a-z%]*)$/)

	if (!match) return "NaNpx"

	const value = parseFloat(match[1])
	const unit = match[2]

	let pixels: number

	switch (unit) {
		case "px":
		case "":
			pixels = value
			break
		case "rem":
		case "em":
			pixels = value * baseFontSize
			break
		case "fr":
			return size
		default:
			console.warn(`Unsupported unit: ${unit}`)
			return "NaNpx"
	}

	return `${pixels}px`
}

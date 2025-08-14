/**
 * Converts a CSS size string (e.g., "12.5rem", "100px") to a number.
 * If the value cannot be parsed, returns NaN.
 * @param size - The size string (e.g., "12.5rem")
 * @returns The numeric part as a number (e.g., 12.5)
 */
export default function sizeToNumberUtil(size: string) {
	const match = size.match(/^(-?\d+(\.\d+)?)/)
	return match ? parseFloat(match[0]) : NaN
}

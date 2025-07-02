export default function mergeStyleUtil(
	...parts: Array<string | undefined | null>
) {
	return parts
		.map((part) => {
			if (!part || !part.trim()) return ""
			const trimmed = part.trim()
			return trimmed.endsWith(";") ? trimmed : trimmed + ";"
		})
		.filter(Boolean)
		.join(" ")
}

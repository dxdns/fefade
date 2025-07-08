export default function normalizeSizeUtil(s: number | string): string {
	if (typeof s === "number") {
		return `${s}px`
	}

	if (typeof s === "string") {
		const trimmed = s.trim()
		if (/^\d+(\.\d+)?$/.test(trimmed)) {
			return `${trimmed}px`
		}
		return trimmed
	}

	return "0px"
}

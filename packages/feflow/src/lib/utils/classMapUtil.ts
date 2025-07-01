type ClassValue =
	| string
	| { [key: string]: any }
	| undefined
	| null
	| false
	| string[]

export default function classMapUtil(
	...classes: (ClassValue | [string | string[], Record<string, string>])[]
) {
	return classes
		.flatMap((cls) => {
			if (!cls) return []

			if (
				Array.isArray(cls) &&
				(Array.isArray(cls[0]) || typeof cls[0] === "string") &&
				typeof cls[1] === "object"
			) {
				const [classInput, styleMap] = cls

				const classList = Array.isArray(classInput)
					? classInput
					: classInput.trim().split(/\s+/)

				return classList.map((c) => styleMap[c] || c)
			}

			if (typeof cls === "string") {
				return cls.trim().split(/\s+/)
			}

			if (Array.isArray(cls) && cls.every((c) => typeof c === "string")) {
				return cls
			}

			if (typeof cls === "object") {
				return Object.entries(cls)
					.filter(([_, value]) => Boolean(value))
					.map(([key]) => key)
			}

			return []
		})
		.filter(Boolean)
		.join(" ")
}

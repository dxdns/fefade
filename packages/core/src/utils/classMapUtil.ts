type ClassValue =
	| string
	| { [key: string]: unknown }
	| undefined
	| null
	| false
	| string[]

export default function classMapUtil(
	...classes: (
		| ClassValue
		| [string | string[] | undefined, Record<string, string>]
	)[]
) {
	return classes
		.flatMap((cls) => {
			if (!cls) return []

			if (
				Array.isArray(cls) &&
				(Array.isArray(cls[0]) ||
					typeof cls[0] === "string" ||
					cls[0] === undefined) &&
				typeof cls[1] === "object"
			) {
				const [classInput, styleMap] = cls

				const classList = Array.isArray(classInput)
					? classInput
					: typeof classInput === "string"
						? classInput.trim().split(/\s+/)
						: []

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

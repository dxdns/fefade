type ClassDictionary = Record<string, any>
type ClassArray = ClassValue[]
type ClassValue =
	| string
	| number
	| boolean
	| ClassDictionary
	| ClassArray
	| null
	| undefined

type ClassMapTuple = [
	string | string[] | undefined | null,
	Record<string, string>
]

export default function classMapUtil(
	...classes: (ClassValue | ClassMapTuple)[]
): string {
	return classes
		.flatMap((cls) => {
			if (!cls) return []

			if (
				Array.isArray(cls) &&
				cls.length === 2 &&
				(Array.isArray(cls[0]) ||
					typeof cls[0] === "string" ||
					cls[0] === undefined ||
					cls[0] === null) &&
				typeof cls[1] === "object" &&
				cls[1] !== null &&
				!Array.isArray(cls[1])
			) {
				const [classInput, styleMap] = cls as ClassMapTuple

				const classList = Array.isArray(classInput)
					? classInput.filter(Boolean)
					: typeof classInput === "string"
						? classInput.trim().split(/\s+/)
						: []

				return classList.map((c) => styleMap[c] || c)
			}

			const classValue = cls as ClassValue

			if (typeof classValue === "string") {
				return classValue.trim().split(/\s+/)
			}

			if (typeof classValue === "number") {
				return [classValue.toString()]
			}

			if (typeof classValue === "boolean") {
				return classValue ? ["true"] : []
			}

			if (Array.isArray(classValue)) {
				return classValue
					.filter(Boolean)
					.flatMap((c) => classMapUtil(c).split(/\s+/))
					.filter(Boolean)
			}

			if (typeof classValue === "object" && classValue !== null) {
				return Object.entries(classValue)
					.filter(([_, value]) => Boolean(value))
					.map(([key]) => key)
			}

			return []
		})
		.filter(Boolean)
		.join(" ")
}

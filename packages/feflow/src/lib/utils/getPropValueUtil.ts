export default function getPropValueUtil<T extends object, K extends keyof T>(
	obj: unknown,
	key: K,
	fallback: T[K]
): T[K] {
	if (obj && typeof obj === "object" && key in obj) {
		return (obj as T)[key] ?? fallback
	}
	return fallback
}

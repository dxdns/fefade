export default function hasKeysUtil<T>(obj: any): obj is T {
	if (!obj || typeof obj !== "object") return false
	const keys = Object.keys(obj) as (keyof T)[]
	return keys.every((key) => key in obj)
}

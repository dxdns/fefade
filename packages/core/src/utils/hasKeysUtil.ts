export default function hasKeysUtil<T>(obj: any, keys?: (keyof T)[]): obj is T {
	return (
		obj && typeof obj === "object" && keys && keys.every((key) => key in obj)
	)
}

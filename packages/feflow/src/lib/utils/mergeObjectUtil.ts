export default function mergeObjectUtil(target: any, source: any): any {
	for (const key in source) {
		if (
			source[key] &&
			typeof source[key] === "object" &&
			!Array.isArray(source[key])
		) {
			target[key] = mergeObjectUtil(target[key] || {}, source[key])
		} else {
			target[key] = source[key]
		}
	}
	return target
}

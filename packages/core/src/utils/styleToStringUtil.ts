import toKebabCaseUtil from "./toKebabCaseUtil.js"

export default function styleToStringUtil(
	style?: Partial<CSSStyleDeclaration> | Record<string, any> | null
): string | undefined {
	if (!style) return undefined
	return Object.entries(style)
		.map(([key, value]) => {
			const finalKey = key.includes("-") ? key : toKebabCaseUtil(key)
			return `${finalKey}: ${value}`
		})
		.join("; ")
}

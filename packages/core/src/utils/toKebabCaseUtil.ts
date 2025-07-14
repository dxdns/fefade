export default function toKebabCaseUtil(str: string) {
	return str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)
}

export default function debounceUtil<T extends (...args: any[]) => void>(
	func: T,
	wait: number
): T {
	let timeout: ReturnType<typeof setTimeout> | null = null
	return ((...args: any[]) => {
		if (timeout) clearTimeout(timeout)
		timeout = setTimeout(() => func(...args), wait)
	}) as T
}

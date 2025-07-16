export default function debounceUtil<T extends (...args: unknown[]) => void>(
	func: T,
	wait: number
): T {
	let timeout: ReturnType<typeof setTimeout> | null = null
	return ((...args: unknown[]) => {
		if (timeout) clearTimeout(timeout)
		timeout = setTimeout(() => func(...args), wait)
	}) as T
}

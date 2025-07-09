type Props<T> = {
	data: T[]
	onSelect: (item: T, index: number, e: KeyboardEvent) => void
	onFocusChange?: (index: number) => void
}

export default function keyboardNavigationAction<T>(
	node: HTMLElement,
	{ data, onSelect, onFocusChange }: Props<T>
) {
	let index = -1

	function handleKeyDown(e: KeyboardEvent) {
		if (!data.length) return

		if (e.key === "ArrowDown") {
			e.preventDefault()
			index = (index + 1) % data.length
			onFocusChange?.(index)
		}

		if (e.key === "ArrowUp") {
			e.preventDefault()
			index = (index + data.length - 1) % data.length
			onFocusChange?.(index)
		}

		if (e.key === "Escape") {
			e.preventDefault()
			if (index > 0) {
				index = 0
			} else {
				index = -1
			}
			onFocusChange?.(index)
		}

		if (e.key === "Enter") {
			e.preventDefault()
			if (data[index]) {
				onSelect(data[index], index, e)
				index = -1
				onFocusChange?.(index)
			}
		}
	}

	node.addEventListener("keydown", handleKeyDown)

	return {
		destroy() {
			node.removeEventListener("keydown", handleKeyDown)
		}
	}
}

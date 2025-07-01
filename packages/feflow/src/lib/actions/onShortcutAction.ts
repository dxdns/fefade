type Props = {
	keys: string[]
	callback: (event: KeyboardEvent) => void
	preventDefault?: boolean
}

export default function onShortcutAction(
	_: HTMLElement,
	{ keys, callback, preventDefault = true }: Props
) {
	const pressedKeys: string[] = []

	function normalizeKey(key: string) {
		return key.toLowerCase()
	}

	function onKeyDown(event: KeyboardEvent) {
		const key = normalizeKey(event.key)
		if (!pressedKeys.includes(key)) pressedKeys.push(key)
		if (pressedKeys.length !== keys.length) return

		const allMatch = pressedKeys.every((k, i) => k === normalizeKey(keys[i]))

		if (allMatch) {
			pressedKeys.length = 0
			if (preventDefault) event.preventDefault()
			callback(event)
		}
	}

	function onKeyUp(_: KeyboardEvent) {
		pressedKeys.length = 0
	}

	window.addEventListener("keydown", onKeyDown)
	window.addEventListener("keyup", onKeyUp)

	return {
		destroy() {
			window.removeEventListener("keydown", onKeyDown)
			window.removeEventListener("keyup", onKeyUp)
		}
	}
}

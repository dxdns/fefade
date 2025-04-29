import { scrollSectionState } from "../states/index.js"

type Props = { debounceDelay?: number }

export default function scrollSectionAction(node: HTMLElement, props?: Props) {
	const { debounceDelay = 50 } = props ?? {}
	const _scrollSectionState = scrollSectionState()

	_scrollSectionState.register(node, node.id)

	function handleScroll() {
		let closest = { reference: "", top: Infinity }
		for (const section of _scrollSectionState.data.sections) {
			const rect = section.node.getBoundingClientRect()
			const distance = Math.abs(rect.top)

			if (distance < closest.top) {
				closest = { reference: section.reference, top: distance }
			}
		}

		if (
			closest.reference &&
			closest.reference !== _scrollSectionState.data.currentReference
		) {
			_scrollSectionState.data.currentReference = closest.reference
		}
	}

	function debounce(func: Function, waitFor: number) {
		let timeout: ReturnType<typeof setTimeout> | null = null

		return (...args: unknown[]) => {
			if (timeout !== null) {
				clearTimeout(timeout)
			}
			timeout = setTimeout(() => func(...args), waitFor)
		}
	}

	let debounceScroll = debounce(handleScroll, debounceDelay)

	document.addEventListener("scroll", debounceScroll, true)

	return {
		update({ debounceDelay }: { debounceDelay?: number }) {
			if (debounceDelay) {
				debounceScroll = debounce(handleScroll, debounceDelay)
			}
		},
		destroy() {
			document.removeEventListener("scroll", debounceScroll, true)
			_scrollSectionState.unregister(node.id)
		}
	}
}

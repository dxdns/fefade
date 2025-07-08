import { scrollSectionState } from "../states/index.js"
import { debounceUtil } from "@dxdns/feflow-core/utils"

type Props = { debounceDelay?: number }

export default function scrollSectionAction(node: HTMLElement, props?: Props) {
	const { debounceDelay = 50 } = props ?? {}
	const scrollSection = scrollSectionState()

	scrollSection.register(node, node.id)

	function update() {
		let closest = { reference: "", top: Infinity }

		for (const { node: sectionNode, reference } of scrollSection.getAll()) {
			const top = Math.abs(sectionNode.getBoundingClientRect().top)
			if (top < closest.top) {
				closest = { reference, top }
			}
		}

		if (closest.reference !== scrollSection.getCurrentReference()) {
			scrollSection.setCurrentReference(closest.reference)
		}
	}

	update()

	let debouncedScroll = debounceUtil(update, debounceDelay)
	document.addEventListener("scroll", debouncedScroll, true)

	return {
		destroy() {
			document.removeEventListener("scroll", debouncedScroll, true)
			scrollSection.unregister(node.id)
		}
	}
}

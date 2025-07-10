import { ElementReferenceType } from "../types/index.js"
import { debounceUtil } from "../utils/index.js"

type Props = {
	debounceDelay?: number
	scrollSection: {
		set: (sections: ElementReferenceType[]) => void
		setCurrentReference: (reference: string) => void
		register: (node: HTMLElement, reference: string) => void
		getAll: () => ElementReferenceType[]
		getCurrentReference: () => string
		getByReference: (reference: string) => ElementReferenceType | undefined
		scrollTo: (reference: string) => void
		getSections: () => Array<
			ElementReferenceType & {
				onClick: () => void
				isActive: boolean
			}
		>
		clear: () => void
		unregister: (reference: string) => void
	}
}

export default function scrollSectionAction(
	node: HTMLElement,
	{ debounceDelay = 50, scrollSection }: Props
) {
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

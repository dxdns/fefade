import type { ElementReferenceType, SectionType } from "@fefade/core/types"

const data = $state<{
	sections: ElementReferenceType[]
	currentReference: string
}>({
	sections: [],
	currentReference: ""
})

export default function scrollSectionState() {
	return {
		set(sections: ElementReferenceType[]) {
			data.sections = sections
		},
		setCurrentReference(reference: string) {
			data.currentReference = reference
		},
		register(node: HTMLElement, reference: string) {
			if (this.getByReference(reference)) return
			this.set([...data.sections, { node, reference }])
		},
		getAll() {
			return data.sections
		},
		getCurrentReference() {
			return data.currentReference
		},
		getByReference(reference: string) {
			return data.sections.find((s) => s.reference === reference)
		},
		scrollTo(reference: string) {
			const section = this.getByReference(reference)
			if (section?.node) {
				section.node.scrollIntoView({
					behavior: "smooth"
				})
				this.setCurrentReference(reference)
			}
		},
		getSections(): SectionType[] {
			return data.sections.map(({ node, reference }) => ({
				node,
				reference,
				onClick: () => this.scrollTo(reference),
				isActive: data.currentReference === reference
			}))
		},
		clear() {
			this.set([])
			this.setCurrentReference("")
		},
		unregister(reference: string) {
			this.set(data.sections.filter((s) => s.reference !== reference))
		}
	}
}

export function getSections() {
	const scrollSection = scrollSectionState()
	return scrollSection.getSections()
}

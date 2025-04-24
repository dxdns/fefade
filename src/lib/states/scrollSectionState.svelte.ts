import type { ElementReferenceType } from "../types/index.js"

const data = $state<{
  sections: ElementReferenceType[]
  currentReference: string
}>({
  sections: [],
  currentReference: "",
})

export default function scrollSectionState() {
  return {
    data,
    register(node: HTMLElement, reference: string) {
      if (this.getSection(reference)) return
      this.data.sections = [...this.data.sections, { node, reference }]
    },
    getSection(reference: string) {
      return this.data.sections.find((s) => s.reference === reference)
    },
    scrollTo(reference: string) {
      const section = this.getSection(reference)
      if (section?.node) {
        section.node.scrollIntoView({ behavior: "smooth" })
        this.data.currentReference = reference
      }
    },
    getSections() {
      return this.data.sections.map(({ node, reference }) => ({
        node,
        reference,
        onClick: () => this.scrollTo(reference),
        isActive: this.data.currentReference === reference,
      }))
    },
    clear() {
      this.data.sections = []
      this.data.currentReference = ""
    },
    unregister(reference: string) {
      this.data.sections = this.data.sections.filter(
        (s) => s.reference !== reference,
      )
    },
  }
}

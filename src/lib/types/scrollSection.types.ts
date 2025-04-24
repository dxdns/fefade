export interface ElementReferenceType {
  node: HTMLElement
  reference: string
}

export interface SectionType extends ElementReferenceType {
  onClick: () => void
  isActive: boolean
}

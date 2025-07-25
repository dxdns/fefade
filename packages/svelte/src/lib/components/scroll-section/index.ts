import ScrollSectionComponent from "./ScrollSection.svelte"
import ScrollSectionContentComponent from "./ScrollSectionContent.svelte"

type ScrollSectionComponentType = typeof ScrollSectionComponent & {
	Content: typeof ScrollSectionContentComponent
}

const ScrollSection =
	ScrollSectionComponent as any as ScrollSectionComponentType
ScrollSection.Content = ScrollSectionContentComponent

export { ScrollSection as default }

import GalleryComponent from "./Gallery.svelte"
import GalleryItemComponent from "./GalleryItem.svelte"

type GalleryComponentType = typeof GalleryComponent & {
	Item: typeof GalleryItemComponent
}

const Gallery = GalleryComponent as any as GalleryComponentType
Gallery.Item = GalleryItemComponent

export { Gallery as default }

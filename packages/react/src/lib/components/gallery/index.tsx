import GalleryComponent from "./Gallery.js"
import GalleryItemComponent from "./GalleryItem.js"

type GalleryComponentType = typeof GalleryComponent & {
	Item: typeof GalleryItemComponent
}

const Gallery = GalleryComponent as any as GalleryComponentType
Gallery.Item = GalleryItemComponent

export { Gallery as default }

import GalleryComponent from "./Gallery.js"
import GalleryItemComponent from "./GalleryItem.js"
import GalleryImageComponent from "./GalleryImage.js"
import GalleryVideoComponent from "./GalleryVideo.js"

type GalleryComponentType = typeof GalleryComponent & {
	/** @deprecated Use Gallery.Image or Gallery.Video */
	Item: typeof GalleryItemComponent
	Image: typeof GalleryImageComponent
	Video: typeof GalleryVideoComponent
}

const Gallery = GalleryComponent as any as GalleryComponentType
Gallery.Item = GalleryItemComponent
Gallery.Image = GalleryImageComponent
Gallery.Video = GalleryVideoComponent

export { Gallery as default }

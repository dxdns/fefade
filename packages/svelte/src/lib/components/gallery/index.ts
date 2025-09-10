import GalleryComponent from "./Gallery.svelte"
import GalleryItemComponent from "./GalleryItem.svelte"
import GalleryImageComponent from "./GalleryImage.svelte"
import GalleryVideoComponent from "./GalleryVideo.svelte"

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

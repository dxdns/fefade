import GalleryComponent from "./Gallery.svelte"
import GalleryItemComponent from "./GalleryItem.svelte"
import GalleryVideoComponent from "./GalleryVideo.svelte"

type GalleryComponentType = typeof GalleryComponent & {
	Item: typeof GalleryItemComponent
	Image: typeof GalleryItemComponent
	Video: typeof GalleryVideoComponent
}

const Gallery = GalleryComponent as any as GalleryComponentType

/**
 * @deprecated Use Gallery.Image or Gallery.Video instead.
 */
Gallery.Item = GalleryItemComponent

Gallery.Image = GalleryItemComponent
Gallery.Video = GalleryVideoComponent

export { Gallery as default }

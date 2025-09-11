import GalleryComponent from "./Gallery.svelte"
import GalleryImageComponent from "./GalleryImage.svelte"
import GalleryVideoComponent from "./GalleryVideo.svelte"

type GalleryComponentType = typeof GalleryComponent & {
	Image: typeof GalleryImageComponent
	Video: typeof GalleryVideoComponent
}

const Gallery = GalleryComponent as any as GalleryComponentType
Gallery.Image = GalleryImageComponent
Gallery.Video = GalleryVideoComponent

export { Gallery as default }

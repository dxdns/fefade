import GalleryComponent from "./Gallery.js"
import GalleryImageComponent from "./GalleryImage.js"
import GalleryVideoComponent from "./GalleryVideo.js"

type GalleryComponentType = typeof GalleryComponent & {
	Image: typeof GalleryImageComponent
	Video: typeof GalleryVideoComponent
}

const Gallery = GalleryComponent as any as GalleryComponentType
Gallery.Image = GalleryImageComponent
Gallery.Video = GalleryVideoComponent

export { Gallery as default }

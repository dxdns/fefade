export type GalleryType = {
	variant?: "default" | "masonry"
	columns?: number | string
	gap?: number | string
	minWidth?: number | string
	maxWidth?: number | string
}

export type GalleryCaptionType = {
	title: string
	description: string
}

export type GalleryMediaType = {
	lazy?: boolean
	dataSrc: string
}

export interface GalleryItemType<T = GalleryCaptionType>
	extends GalleryMediaType {
	caption?: T
}

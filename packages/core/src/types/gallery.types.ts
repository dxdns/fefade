export type GalleryType = {
	variant?: "default" | "masonry"
	columns?: number | string
	gap?: number | string
	minWidth?: number | string
	maxWidth?: number | string
}

export interface GalleryCaptionType {
	title: string
	description: string
}

export type GalleryItemType<T = GalleryCaptionType> = {
	lazy?: boolean
	dataSrc: string
	caption?: T
	fallback?: string
}

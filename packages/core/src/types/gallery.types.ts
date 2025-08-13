export type GalleryType = {
	variant?: "default" | "masonry"
	columns?: number | string
	gap?: number | string
	minWidth?: number | string
	maxWidth?: number | string
}

type TextWithLinesType = {
	text: string
	lines?: number
}

export type GalleryCaptionType = {
	label: TextWithLinesType
	description: TextWithLinesType
}

export type GalleryMediaType = {
	lazy?: boolean
	dataSrc: string
}

export interface GalleryItemType<T = GalleryCaptionType>
	extends GalleryMediaType {
	caption?: T
}

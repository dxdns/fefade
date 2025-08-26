type TextWithLinesType = {
	text: string
	lines?: number
}

export type GalleryCaptionType = {
	label: TextWithLinesType
	description?: TextWithLinesType
	style?: string
}

export type GalleryMediaType = {
	lazy?: boolean
	dataSrc: string
}

export interface GalleryItemType<T = GalleryCaptionType>
	extends GalleryMediaType {
	caption?: T
}

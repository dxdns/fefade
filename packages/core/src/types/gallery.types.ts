export type GalleryType = {
	variant?: "default" | "masonry"
	columns?: number | string
	gap?: number | string
	minWidth?: number | string
	maxWidth?: number | string
}

export type GalleryItemType = {
	lazy?: boolean
	dataSrc: string
	caption?: {
		title: string
		description: string
	}
	fallback?: string
}

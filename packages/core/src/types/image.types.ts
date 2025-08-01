export type ImageType = {
	lazy?: boolean
	dataSrc: string
	hover?: {
		transition?: "none" | "scale"
	}
	fallback?: string
}

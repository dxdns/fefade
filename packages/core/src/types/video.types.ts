type VideoExtensionType = "mp4" | "webm" | "ogg" | "mov" | "avi" | "mkv"

export type VideoType = {
	lazy?: boolean
	dataSrc: string
	extension?: VideoExtensionType | string
}

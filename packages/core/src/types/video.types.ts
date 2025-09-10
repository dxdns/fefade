type VideoFormat = "mp4" | "webm" | "ogg" | "mov" | "avi" | "mkv"

export type VideoType<T extends string = never> = {
	type?: `video/${VideoFormat | T}`
	lazy?: boolean
	dataSrc: string
}

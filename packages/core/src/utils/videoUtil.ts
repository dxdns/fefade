const videoExtensions = [".mp4", ".webm", ".ogg", ".mov", ".avi", ".mkv"]

function isVideo(s: string) {
	return videoExtensions.some((ext) => s.toLowerCase().endsWith(ext))
}

function getVideoType(s: string) {
	if (isVideo(s)) {
		for (const ext of videoExtensions) {
			if (s.toLowerCase().split("?")[0].split("#")[0].endsWith(ext)) {
				return ext
			}
		}
	}
	return videoExtensions[0]
}

export default function videoUtil() {
	return {
		isVideo,
		getVideoType
	}
}

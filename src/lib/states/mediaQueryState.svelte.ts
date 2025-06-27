import { browser } from "$app/environment"

let data = $state(false)

export default function mediaQueryState(q: string) {
	if (!browser) {
		return {
			get value() {
				return false
			},
			destroy() {}
		}
	}

	const mediaQuery = window.matchMedia(q)

	function update() {
		data = mediaQuery.matches
	}

	function mediaHandler(event: MediaQueryListEvent) {
		data = event.matches
	}

	update()

	mediaQuery.addEventListener("change", mediaHandler)
	window.addEventListener("resize", update)

	return {
		get value() {
			return data
		},
		destroy() {
			if (mediaQuery) {
				mediaQuery.removeEventListener("change", mediaHandler)
				window.removeEventListener("resize", update)
			}
		}
	}
}

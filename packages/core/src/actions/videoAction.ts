import checkVisibilityAction from "./checkVisibilityAction.js"

type Props = {
	lazy?: boolean
}

export default function videoAction(node: HTMLVideoElement, props: Props = {}) {
	let { lazy = false } = props
	let checkVisibility: ReturnType<typeof checkVisibilityAction> | null = null

	node.style.opacity = "0"

	const sourceEl = node.querySelector("source")
	const dataSrc = node.dataset.src || ""
	const fallback = node.dataset.fallback || ""

	function removeListeners() {
		node.removeEventListener("loadeddata", onLoaded)
		node.removeEventListener("error", onError)
	}

	function finalize(shouldClearDataset = true) {
		node.style.opacity = "1"
		removeListeners()
		if (shouldClearDataset) {
			delete node.dataset.src
			delete node.dataset.fallback
		}
	}

	function setSource(src: string) {
		if (sourceEl) {
			sourceEl.src = src
		}
	}

	function onLoaded() {
		finalize()
	}

	function onError() {
		if (fallback && sourceEl?.src !== fallback && node.src !== fallback) {
			removeListeners()
			node.addEventListener("loadeddata", onLoaded)
			setSource(fallback)
			node.load()
		} else {
			finalize()
		}
	}

	function startLoading() {
		if (node.readyState >= 2) {
			finalize()
		} else {
			node.addEventListener("loadeddata", onLoaded)
			node.addEventListener("error", onError)
		}
	}

	function loadVideo() {
		if (dataSrc) {
			setSource(dataSrc)
			node.load()
			startLoading()
		}
	}

	function lazyLoad() {
		checkVisibility = checkVisibilityAction(node, {
			callback: (isVisible) => {
				if (isVisible) {
					loadVideo()
				}
			}
		})
	}

	function init() {
		if (lazy) {
			lazyLoad()
		} else {
			loadVideo()
		}
	}

	init()

	return {
		destroy() {
			removeListeners()
			checkVisibility?.destroy()
		}
	}
}

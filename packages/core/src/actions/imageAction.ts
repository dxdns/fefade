import checkVisibilityAction from "./checkVisibilityAction.js"

type Props = {
	lazy?: boolean
}

export default function imageAction(node: HTMLImageElement, props: Props = {}) {
	let { lazy = false } = props
	let checkVisibility: ReturnType<typeof checkVisibilityAction> | null = null

	node.style.opacity = "0"

	const dataSrc = node.dataset.src
	const fallback = node.dataset.fallback

	function removeListeners() {
		node.removeEventListener("load", onLoad)
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

	function setImageSrc() {
		node.src = dataSrc || fallback || ""
	}

	function onLoad() {
		finalize()
	}

	function onError() {
		if (fallback) {
			removeListeners()
			node.addEventListener("load", onLoad)
			node.src = fallback
		} else {
			finalize()
		}
	}

	function startLoading() {
		if (node.complete && node.naturalWidth !== 0) {
			finalize()
		} else {
			node.addEventListener("load", onLoad)
			node.addEventListener("error", onError)
		}
	}

	function loadImage() {
		setImageSrc()
		startLoading()
	}

	function normalLoad() {
		loadImage()
	}

	function lazyLoad() {
		checkVisibility = checkVisibilityAction(node, {
			callback: (isVisible) => {
				if (isVisible) {
					loadImage()
				}
			}
		})
	}

	function init() {
		if (lazy) {
			lazyLoad()
		} else {
			normalLoad()
		}
	}

	requestAnimationFrame(init)

	return {
		update(newProps?: Props) {
			if (!newProps) return
			if (newProps.lazy !== lazy) {
				lazy = newProps.lazy ?? false
				init()
			}
		},
		destroy() {
			removeListeners()
			checkVisibility?.destroy()
		}
	}
}

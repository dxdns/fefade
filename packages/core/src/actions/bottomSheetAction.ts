type Props = {
	handleClose: () => void
	hideIn?: number
}

export default function bottomSheetAction(
	node: HTMLElement,
	props = {} as Props
) {
	const { hideIn, handleClose } = props

	const wrapper = node.firstElementChild as HTMLElement
	const wrapperLastChild = wrapper.children[
		wrapper.children.length - 1
	] as HTMLDivElement | null

	function initWrapperTransition() {
		wrapper.style.transition = "0.3s ease"
	}

	initWrapperTransition()

	const dragButton = wrapper.firstElementChild as HTMLElement

	dragButton.tabIndex = 0
	dragButton.role = "slider"
	dragButton.ariaLabel = "Resize bottom sheet"

	const wrapperHeight = parseInt(wrapper.style.height) || 50
	const wrapperMinHeight = parseInt(wrapper.style.minHeight) ? wrapperHeight : 0
	const wrapperMaxHeight = parseInt(wrapper.style.maxHeight) || 100

	let isDragging = false
	let startY = 0
	let startHeight = wrapperHeight
	let currentHeight = wrapperHeight

	function updateAria() {
		dragButton.ariaValueMin = String(wrapperMinHeight)
		dragButton.ariaValueMax = String(wrapperMaxHeight)
		dragButton.ariaValueNow = String(currentHeight)
	}

	function setWrapperHeightStyle(h: number) {
		wrapper.style.height = `${h}vh`
	}

	function setCurrentHeight(h: number) {
		currentHeight = Math.max(0, Math.min(h, wrapperMaxHeight))
	}

	function resetStyle() {
		setCurrentHeight(wrapperHeight)
		setWrapperHeightStyle(wrapperHeight)
		node.style.top = "unset"
	}

	function setFullScreenStyle(h: number) {
		if (h === 100) {
			node.style.top = "0"
		}
	}

	function update(h: number) {
		setCurrentHeight(h)
		setWrapperHeightStyle(h)
		setFullScreenStyle(h)
		updateAria()
	}

	function hide() {
		handleClose?.()
		resetStyle()
	}

	function pageY(e: MouseEvent | TouchEvent) {
		return (e instanceof MouseEvent ? e.pageY : e.touches?.[0].pageY) ?? 0
	}

	function dragStart(e: MouseEvent | TouchEvent) {
		isDragging = true
		startY = pageY(e)
		startHeight = currentHeight

		wrapper.style.transition = "none"

		if (wrapperLastChild) {
			wrapperLastChild.style.overflow = "hidden"
			wrapperLastChild.style.pointerEvents = "none"
		}

		dragButton.focus()
	}

	function dragMove(e: MouseEvent | TouchEvent) {
		if (!isDragging) return

		if (e instanceof TouchEvent) {
			e.preventDefault()
		}

		const currentY = pageY(e)
		const diff = startY - currentY
		const newHeight = startHeight + (diff / window.innerHeight) * 100

		update(newHeight)
	}

	function dragStop() {
		if (!isDragging) return
		isDragging = false
		initWrapperTransition()

		if (wrapperLastChild) {
			wrapperLastChild.style.overflow = "auto"
			wrapperLastChild.style.pointerEvents = "auto"
		}

		if (currentHeight > wrapperHeight) {
			update(wrapperMaxHeight)
			return
		}

		const _hideIn = hideIn ? hideIn : wrapperMinHeight + 30

		if (currentHeight <= _hideIn) {
			hide()
			return
		}

		update(wrapperHeight)
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === "ArrowUp") update(currentHeight + 10)
		if (e.key === "ArrowDown") update(currentHeight - 10)
	}

	function handleClick(this: HTMLElement, ev: MouseEvent) {
		if (!wrapper.contains(ev.target as HTMLElement)) {
			hide()
		}
	}

	updateAria()

	node.addEventListener("click", handleClick)

	document.addEventListener("mousemove", dragMove)
	document.addEventListener("touchmove", dragMove)
	document.addEventListener("mouseup", dragStop)
	document.addEventListener("touchend", dragStop)

	dragButton.addEventListener("mousedown", dragStart)
	dragButton.addEventListener("touchstart", dragStart)
	dragButton.addEventListener("keydown", handleKeyDown)

	return {
		destroy() {
			node.removeEventListener("click", handleClick)

			document.removeEventListener("mousemove", dragMove)
			document.removeEventListener("touchmove", dragMove)
			document.removeEventListener("mouseup", dragStop)
			document.removeEventListener("touchend", dragStop)

			dragButton.removeEventListener("mousedown", dragStart)
			dragButton.removeEventListener("touchstart", dragStart)
			dragButton.removeEventListener("keydown", handleKeyDown)
		}
	}
}

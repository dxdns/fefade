type Props = {
	handleClose: () => void
}

export default function bottomSheetAction(
	node: HTMLElement,
	props = {} as Props
) {
	const { handleClose } = props

	const sheetContent = node.firstElementChild as HTMLElement
	sheetContent.style.transition = "0.3s ease"

	const header = sheetContent.firstElementChild as HTMLElement
	const dragIcon = header.firstElementChild as HTMLElement

	dragIcon.tabIndex = 0
	dragIcon.role = "slider"
	dragIcon.ariaLabel = "Resize bottom sheet"

	const computedStyles = getComputedStyle(sheetContent)

	const sheetContentHeight = parseInt(sheetContent.style.height) || 50

	const sheetContentMinHeight = parseInt(sheetContent.style.minHeight)
		? parseInt(computedStyles.minHeight)
		: 0

	const sheetContentMaxHeight = parseInt(sheetContent.style.maxHeight) || 100

	let isDragging = false
	let startY = 0
	let startHeight = sheetContentHeight
	let currentHeight = sheetContentHeight

	function updateAria() {
		dragIcon.ariaValueMin = String(sheetContentMinHeight)
		dragIcon.ariaValueMax = String(sheetContentMaxHeight)
		dragIcon.ariaValueNow = String(currentHeight)
	}

	function setContentHeightStyle(h: number) {
		sheetContent.style.height = `${h}vh`
	}

	function setCurrentHeight(h: number) {
		currentHeight = Math.max(0, Math.min(h, sheetContentMaxHeight))
	}

	function resetStyle() {
		document.body.style.overflowY = "auto"
		setCurrentHeight(sheetContentHeight)
		setContentHeightStyle(sheetContentHeight)
		node.style.top = "unset"
	}

	function setFullScreenStyle(h: number) {
		if (h === 100) {
			node.style.top = "0"
		}
	}

	function update(h: number) {
		setCurrentHeight(h)
		setContentHeightStyle(h)
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
		document.body.style.overflowY = "hidden"
		sheetContent.style.transition = "none"
		dragIcon.focus()
	}

	function dragMove(e: MouseEvent | TouchEvent) {
		if (!isDragging) return

		const currentY = pageY(e)
		const diff = startY - currentY
		const newHeight = startHeight + (diff / window.innerHeight) * 100

		update(newHeight)
	}

	function dragStop() {
		if (!isDragging) return
		isDragging = false
		document.body.style.overflowY = "auto"
		sheetContent.style.transition = "0.3s ease"

		if (currentHeight > sheetContentHeight) {
			update(sheetContentMaxHeight)
			return
		}

		if (Math.abs(currentHeight - sheetContentMinHeight) < 25) {
			hide()
			return
		}

		update(sheetContentHeight)
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === "ArrowUp") update(currentHeight + 10)
		if (e.key === "ArrowDown") update(currentHeight - 10)
	}

	function handleClick(this: HTMLElement, ev: MouseEvent) {
		if (!sheetContent.contains(ev.target as HTMLElement)) {
			hide()
		}
	}

	updateAria()

	node.addEventListener("click", handleClick)

	document.addEventListener("mousemove", dragMove)
	document.addEventListener("touchmove", dragMove)
	document.addEventListener("mouseup", dragStop)
	document.addEventListener("touchend", dragStop)

	dragIcon.addEventListener("mousedown", dragStart)
	dragIcon.addEventListener("touchstart", dragStart)
	dragIcon.addEventListener("keydown", handleKeyDown)

	return {
		destroy() {
			node.removeEventListener("click", handleClick)

			document.removeEventListener("mousemove", dragMove)
			document.removeEventListener("touchmove", dragMove)
			document.removeEventListener("mouseup", dragStop)
			document.removeEventListener("touchend", dragStop)

			dragIcon.removeEventListener("mousedown", dragStart)
			dragIcon.removeEventListener("touchstart", dragStart)
			dragIcon.removeEventListener("keydown", handleKeyDown)
		}
	}
}

type Props = {
	handleClose: () => void
	styles: Record<string, string>
}

export default function bottomSheetAction(
	node: HTMLElement,
	props = {} as Props
) {
	const { handleClose } = props

	const sheetContent = node.firstElementChild as HTMLElement
	setContentTransitionStyle()

	const header = sheetContent.firstElementChild as HTMLElement
	const dragIcon = header.firstElementChild as HTMLElement

	const sheetContentHeightParsed = parseInt(sheetContent.style.height) || 50
	const sheetContentMinHeightParsed = parseInt(sheetContent.style.minHeight)

	const sheetContentMinHeight = !Number.isNaN(sheetContentMinHeightParsed)
		? sheetContentMinHeightParsed
		: sheetContentHeightParsed || 50

	const sheetContentMaxHeightParsed =
		parseInt(sheetContent.style.maxHeight) || 100

	let isDragging = false
	let startY = 0
	let startHeight = sheetContentHeightParsed
	let currentHeight = sheetContentHeightParsed

	dragIcon.tabIndex = 0
	dragIcon.role = "slider"

	header.ariaLabel = "Resize bottom sheet"
	header.ariaValueMin = String(sheetContentMinHeight)
	header.ariaValueMax = String(sheetContentMaxHeightParsed)
	header.ariaValueNow = String(currentHeight)

	function setContentHeightStyle(h: number) {
		sheetContent.style.height = `${h}vh`
	}

	function setCurrentHeight(h: number) {
		currentHeight = Math.max(0, Math.min(h, sheetContentMaxHeightParsed))
	}

	function setContentTransitionStyle() {
		sheetContent.style.transition = "0.3s ease"
	}

	function resetStyle() {
		document.body.style.overflowY = "auto"
		setCurrentHeight(sheetContentHeightParsed)
		setContentHeightStyle(sheetContentHeightParsed)
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
	}

	function hide() {
		handleClose?.()
		resetStyle()
	}

	function pageY(e: MouseEvent | TouchEvent) {
		return (e instanceof MouseEvent ? e.pageY : e.touches?.[0].pageY) ?? 0
	}

	function dragStart(e: PointerEvent) {
		isDragging = true
		dragIcon.setPointerCapture(e.pointerId)
		startY = pageY(e)
		startHeight = currentHeight
		document.body.style.overflowY = "hidden"
		sheetContent.style.transition = "none"
		dragIcon.focus()
	}

	function dragMove(e: PointerEvent) {
		if (!isDragging) return
		const diff = startY - e.pageY
		const newHeight = startHeight + (diff / window.innerHeight) * 100
		update(newHeight)
	}

	function dragStop(e: PointerEvent) {
		if (!isDragging) return
		isDragging = false
		dragIcon.releasePointerCapture(e.pointerId)
		setContentTransitionStyle()

		if (currentHeight > sheetContentHeightParsed) {
			update(sheetContentMaxHeightParsed)
		} else if (currentHeight < sheetContentHeightParsed) {
			if (sheetContentMinHeight < 25) {
				hide()
			} else {
				update(sheetContentMinHeight)
			}
		} else {
			update(sheetContentHeightParsed)
		}
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

	node.addEventListener("click", handleClick)

	dragIcon.addEventListener("pointerdown", dragStart)
	dragIcon.addEventListener("pointermove", dragMove)
	dragIcon.addEventListener("pointerup", dragStop)
	dragIcon.addEventListener("pointercancel", dragStop)

	dragIcon.addEventListener("keydown", handleKeyDown)

	return {
		destroy() {
			node.removeEventListener("click", handleClick)

			dragIcon.removeEventListener("pointerdown", dragStart)
			dragIcon.removeEventListener("pointermove", dragMove)
			dragIcon.removeEventListener("pointerup", dragStop)
			dragIcon.removeEventListener("pointercancel", dragStop)

			dragIcon.removeEventListener("keydown", handleKeyDown)
		}
	}
}

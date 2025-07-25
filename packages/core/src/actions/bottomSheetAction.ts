import styles from "../styles/BottomSheet.module.css"

type Props = {
	handleClose: () => void
}

export default function bottomSheetAction(
	node: HTMLElement,
	{ handleClose }: Props
) {
	let isDragging = false
	let startY = 0
	let startHeight = 50
	let currentHeight = 50

	const sheetContent = node.firstElementChild as HTMLElement
	const header = sheetContent.firstElementChild as HTMLElement
	const dragIcon = header.firstElementChild as HTMLElement
	dragIcon.tabIndex = 0
	dragIcon.role = "slider"

	header.ariaLabel = "Resize bottom sheet"
	header.ariaValueMin = "25"
	header.ariaValueMax = "100"
	header.ariaValueNow = String(currentHeight)

	function setContentHeightStyle(h: number) {
		sheetContent.style.height = `${h}vh`
	}

	function setCurrentHeight(h: number) {
		currentHeight = Math.max(0, Math.min(h, 100))
	}

	function update(h: number) {
		setCurrentHeight(h)
		setContentHeightStyle(currentHeight)
		node.classList.toggle(styles.fullscreen, currentHeight === 100)
	}

	function hide() {
		document.body.style.overflowY = "auto"
		handleClose?.()
		setCurrentHeight(50)
		setContentHeightStyle(currentHeight)
		node.classList.remove(styles.fullscreen)
	}

	function dragStart(e: MouseEvent | TouchEvent) {
		isDragging = true
		dragIcon.focus()
		startY = (e instanceof MouseEvent ? e.pageY : e.touches?.[0].pageY) ?? 0
		startHeight = parseInt(sheetContent.style.height) || 50
		node.classList.add(styles.dragging)
	}

	function dragMove(e: MouseEvent | TouchEvent) {
		if (!isDragging) return

		const currentY =
			(e instanceof MouseEvent ? e.pageY : e.touches?.[0].pageY) ?? 0
		const diff = startY - currentY
		const newHeight = startHeight + (diff / window.innerHeight) * 100

		update(newHeight)
	}

	function dragStop() {
		if (!isDragging) return
		isDragging = false
		node.classList.remove(styles.dragging)

		if (currentHeight < 25) {
			hide()
		} else if (currentHeight > 75) {
			update(100)
		} else {
			update(50)
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

type Props = {
	onChange?: (el: HTMLElement, index: number) => void
	styles: { [key: string]: string }
}

export default function draggableGroupAction(
	node: HTMLElement,
	props: Props = {
		styles: {}
	}
) {
	const { styles } = props
	let dragEl: HTMLElement | null = null
	let nextEl: ChildNode | null = null
	let isTouchDragging = false

	function getDragIndex(): number {
		return dragEl ? Array.from(node.children).indexOf(dragEl) : -1
	}

	function isDraggingAfterHalfway(
		x: number,
		y: number,
		target: HTMLElement
	): boolean {
		const { top, left, width, height } = target.getBoundingClientRect()
		const relativeY = (y - top) / height
		const relativeX = (x - left) / width
		return relativeY > 0.5 || relativeX > 0.5
	}

	function moveDraggedElement(x: number, y: number) {
		if (!dragEl) return

		const siblings = Array.from(node.children)
		const target = siblings.find(
			(el) =>
				el !== dragEl &&
				el.getBoundingClientRect().top <= y &&
				el.getBoundingClientRect().bottom >= y
		) as HTMLElement | undefined

		if (target && target.parentElement === node) {
			const insertAfter = isDraggingAfterHalfway(x, y, target)
			const refNode = insertAfter ? target.nextSibling : target

			if (refNode !== dragEl && dragEl.nextSibling !== refNode) {
				node.insertBefore(dragEl, refNode)
			}
		}
	}

	function onDragOver(e: DragEvent) {
		e.preventDefault()
		if (!dragEl || !e.dataTransfer) return
		e.dataTransfer.dropEffect = "move"
		moveDraggedElement(e.clientX, e.clientY)
	}

	function onDragEnd(e: DragEvent) {
		e.preventDefault()
		endDrag()
	}

	function onDragStart(e: DragEvent) {
		const target = e.target as HTMLElement
		if (!target || !target.draggable) return

		dragEl = target
		nextEl = dragEl.nextSibling
		dragEl.classList.add(styles.dragging)

		e.dataTransfer!.effectAllowed = "move"
		e.dataTransfer!.setData("text/plain", dragEl.textContent || "")

		node.addEventListener("dragover", onDragOver)
		node.addEventListener("dragend", onDragEnd)
	}

	function onTouchStart(e: TouchEvent) {
		const target = (e.target as HTMLElement)?.closest(
			"[draggable='true']"
		) as HTMLElement | null
		if (!target) return

		isTouchDragging = true
		dragEl = target
		nextEl = dragEl.nextSibling
		dragEl.classList.add(styles.dragging)
		document.addEventListener("touchmove", onTouchMove, { passive: false })
		document.addEventListener("touchend", onTouchEnd)
	}

	function onTouchMove(e: TouchEvent) {
		if (!isTouchDragging || !dragEl) return
		e.preventDefault()
		const touch = e.touches[0]
		moveDraggedElement(touch.clientX, touch.clientY)
	}

	function onTouchEnd() {
		endDrag()
		document.removeEventListener("touchmove", onTouchMove)
		document.removeEventListener("touchend", onTouchEnd)
		isTouchDragging = false
	}

	function endDrag() {
		if (!dragEl) return
		dragEl.classList.remove(styles.dragging)

		node.removeEventListener("dragover", onDragOver)
		node.removeEventListener("dragend", onDragEnd)

		if (nextEl !== dragEl.nextSibling) {
			props?.onChange?.(dragEl, getDragIndex())
		}

		dragEl = null
		nextEl = null
	}

	node.addEventListener("dragstart", onDragStart)
	node.addEventListener("touchstart", onTouchStart)

	return {
		destroy() {
			node.removeEventListener("dragstart", onDragStart)
			node.removeEventListener("dragover", onDragOver)
			node.removeEventListener("dragend", onDragEnd)
			node.removeEventListener("touchstart", onTouchStart)
			document.removeEventListener("touchmove", onTouchMove)
			document.removeEventListener("touchend", onTouchEnd)
		}
	}
}

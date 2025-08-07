type Props = {
	onChange?: (el: HTMLElement, index: number) => void
}

export default function draggableGroupAction(
	node: HTMLElement,
	props: Props = {}
) {
	let dragEl: HTMLElement | null = null
	let nextEl: ChildNode | null = null

	function isDraggingAfterHalfway(e: DragEvent, target: HTMLElement): boolean {
		const { top, left, width, height } = target.getBoundingClientRect()
		const relativeY = (e.clientY - top) / height
		const relativeX = (e.clientX - left) / width
		return relativeY > 0.5 || relativeX > 0.5
	}

	function onDragOver(e: DragEvent) {
		e.preventDefault()
		if (!dragEl || !e.dataTransfer) return

		e.dataTransfer.dropEffect = "move"
		const target = e.target as HTMLElement

		if (target && target !== dragEl && target.parentElement === node) {
			const insertAfter = isDraggingAfterHalfway(e, target)
			const refNode = insertAfter ? target.nextSibling : target

			if (!refNode || node.contains(refNode)) {
				node.insertBefore(dragEl, refNode)
			}
		}
	}

	function onDragEnd(e: DragEvent) {
		e.preventDefault()
		if (!dragEl) return

		dragEl.classList.remove("dragging")
		node.removeEventListener("dragover", onDragOver)
		node.removeEventListener("dragend", onDragEnd)

		if (nextEl !== dragEl.nextSibling) {
			props?.onChange?.(dragEl, Array.from(node.children).indexOf(dragEl))
		}

		dragEl = null
		nextEl = null
	}

	function onDragStart(e: DragEvent) {
		const target = e.target as HTMLElement
		if (!target || !target.draggable) return

		dragEl = target
		nextEl = dragEl.nextSibling

		dragEl.classList.add("dragging")

		e.dataTransfer!.effectAllowed = "move"
		e.dataTransfer!.setData("text/plain", dragEl.textContent || "")

		node.addEventListener("dragover", onDragOver)
		node.addEventListener("dragend", onDragEnd)
	}

	node.addEventListener("dragstart", onDragStart)

	return {
		destroy() {
			node.removeEventListener("dragstart", onDragStart)
			node.removeEventListener("dragover", onDragOver)
			node.removeEventListener("dragend", onDragEnd)
		}
	}
}

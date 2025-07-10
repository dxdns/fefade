type Props = {
	onFiles: (files: File[]) => void
	setIsDragging: (val: boolean) => void
}

export default function inputDropAction(
	node: HTMLElement,
	{ onFiles, setIsDragging }: Props
) {
	function preventDefaults(e: Event) {
		e.preventDefault()
		e.stopPropagation()
	}

	function highlight(e: Event) {
		preventDefaults(e)
		setIsDragging(true)
	}

	function unhighlight(e: Event) {
		preventDefaults(e)
		setIsDragging(false)
	}

	function handleDrop(e: DragEvent) {
		preventDefaults(e)
		setIsDragging(false)

		if (e.dataTransfer) {
			const files = Array.from(e.dataTransfer.files).filter((f) => f.size > 0)
			if (files.length === 0) {
				alert("permission denied")
			}
			onFiles(files)
		}
	}

	node.addEventListener("dragenter", highlight)
	node.addEventListener("dragover", highlight)
	node.addEventListener("dragleave", unhighlight)
	node.addEventListener("drop", handleDrop)

	return {
		destroy() {
			node.removeEventListener("dragenter", highlight)
			node.removeEventListener("dragover", highlight)
			node.removeEventListener("dragleave", unhighlight)
			node.removeEventListener("drop", handleDrop)
		}
	}
}

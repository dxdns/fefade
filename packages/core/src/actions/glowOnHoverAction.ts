export default function glowOnHoverAction(node: HTMLElement) {
	const firstChild = node.firstElementChild as HTMLElement | null
	let childComputedStyle: CSSStyleDeclaration | null

	const glow = document.createElement("div")

	node.style.position = "relative"
	node.insertBefore(glow, firstChild)

	function updateChildColorBg() {
		if (!firstChild) return
		childComputedStyle = getComputedStyle(firstChild)
		const computedBg = childComputedStyle.backgroundColor
		const hasTransparentBg =
			!computedBg ||
			computedBg === "rgba(0, 0, 0, 0)" ||
			computedBg === "transparent" ||
			computedBg === "none"

		if (hasTransparentBg) {
			firstChild.style.backgroundColor = "var(--ff-bg)"
		}
	}

	function updateGlowStyle() {
		glow.style.position = "absolute"
		glow.style.pointerEvents = "none"
		glow.style.zIndex = "0"
		glow.style.transition = "background-position 0.1s ease, opacity 0.3s ease"
		glow.style.opacity = "0"
		glow.style.filter = "blur(3px)"
		glow.style.borderRadius = childComputedStyle?.borderRadius || "0px"
	}

	function updateSizeAndPosition() {
		if (!firstChild) return
		const rect = firstChild.getBoundingClientRect()
		const parentRect = node.getBoundingClientRect()
		const offsetX = rect.left - parentRect.left
		const offsetY = rect.top - parentRect.top

		const padding = 3

		glow.style.width = `${rect.width + padding * 2}px`
		glow.style.height = `${rect.height + padding * 2}px`
		glow.style.top = `${offsetY - padding}px`
		glow.style.left = `${offsetX - padding}px`
	}

	function updateGlow(event: MouseEvent) {
		const rect = (firstChild || node).getBoundingClientRect()
		const x = ((event.clientX - rect.left) / rect.width) * 100
		const y = ((event.clientY - rect.top) / rect.height) * 100

		glow.style.background = `radial-gradient(circle at ${x}% ${y}%, var(--ff-border) 0%, transparent 30%)`
		glow.style.opacity = "1"
	}

	function onLeave() {
		glow.style.opacity = "0"
	}

	updateChildColorBg()
	updateGlowStyle()
	updateSizeAndPosition()

	window.addEventListener("resize", updateSizeAndPosition)
	node.addEventListener("mousemove", updateGlow)
	node.addEventListener("mouseleave", onLeave)

	return {
		destroy() {
			window.removeEventListener("resize", updateSizeAndPosition)
			node.removeEventListener("mousemove", updateGlow)
			node.removeEventListener("mouseleave", onLeave)
			if (node.contains(glow)) node.removeChild(glow)
		}
	}
}

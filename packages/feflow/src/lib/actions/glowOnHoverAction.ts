export default function glowOnHoverAction(node: HTMLElement) {
	let glow: HTMLDivElement | null = null
	const target = node.firstElementChild as HTMLElement

	function createGlow() {
		if (!target) return

		const computedStyle = getComputedStyle(target)
		const computedBg = computedStyle.backgroundColor
		const hasTransparentBg =
			!computedBg ||
			computedBg === "rgba(0, 0, 0, 0)" ||
			computedBg === "transparent" ||
			computedBg === "none"

		if (hasTransparentBg) {
			target.style.backgroundColor = "var(--ff-bg)"
		}

		glow = document.createElement("div")
		const style = glow.style
		style.position = "absolute"
		style.pointerEvents = "none"
		style.zIndex = "0"
		style.borderRadius = computedStyle.borderRadius || "0px"
		style.transition = "background-position 0.1s ease, opacity 0.3s ease"
		style.opacity = "0"
		style.filter = "blur(3px)"
		node.style.position ||= "relative"
		node.insertBefore(glow, target)
		updateSizeAndPosition()
	}

	function updateSizeAndPosition() {
		if (!glow || !target) return

		const rect = target.getBoundingClientRect()
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
		if (!glow || !target) return

		const rect = target.getBoundingClientRect()
		const x = ((event.clientX - rect.left) / rect.width) * 100
		const y = ((event.clientY - rect.top) / rect.height) * 100

		glow.style.background = `radial-gradient(circle at ${x}% ${y}%, var(--ff-border) 0%, transparent 30%)`
		glow.style.opacity = "1"
	}

	function onLeave() {
		if (glow) glow.style.opacity = "0"
	}

	createGlow()

	window.addEventListener("resize", updateSizeAndPosition)
	node.addEventListener("mousemove", updateGlow)
	node.addEventListener("mouseleave", onLeave)

	return {
		destroy() {
			window.removeEventListener("resize", updateSizeAndPosition)
			node.removeEventListener("mousemove", updateGlow)
			node.removeEventListener("mouseleave", onLeave)
			if (glow && node.contains(glow)) node.removeChild(glow)
		}
	}
}

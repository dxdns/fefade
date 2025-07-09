<script lang="ts">
	import { classMapUtil } from "core/utils"
	import { onMount, tick } from "svelte"
	import type { HTMLAttributes } from "svelte/elements"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		isOpen: boolean
		handleClose: () => void
	}

	let {
		class: className = "",
		isOpen,
		handleClose,
		children,
		...rest
	}: Props = $props()

	let bottomSheet: HTMLDivElement
	let sheetContent: HTMLDivElement

	let isDragging = false
	let startY = 0
	let startHeight = 50
	let currentHeight = $state(50)

	const updateSheetHeight = (height: number) => {
		currentHeight = Math.max(0, Math.min(height, 100))
		if (sheetContent) {
			sheetContent.style.height = `${currentHeight}vh`
		}
		bottomSheet?.classList.toggle("fullscreen", currentHeight === 100)
	}

	const hideBottomSheet = () => {
		document.body.style.overflowY = "auto"
		handleClose?.()
		currentHeight = 50
	}

	const dragStart = (e: MouseEvent | TouchEvent) => {
		isDragging = true
		startY = (e instanceof MouseEvent ? e.pageY : e.touches?.[0].pageY) ?? 0
		startHeight = parseInt(sheetContent.style.height) || 50
		bottomSheet.classList.add("dragging")
	}

	const dragging = (e: MouseEvent | TouchEvent) => {
		if (!isDragging) return
		const currentY =
			(e instanceof MouseEvent ? e.pageY : e.touches?.[0].pageY) ?? 0
		const delta = startY - currentY
		const newHeight = startHeight + (delta / window.innerHeight) * 100
		updateSheetHeight(newHeight)
	}

	const dragStop = () => {
		if (!isDragging) return
		isDragging = false
		bottomSheet.classList.remove("dragging")
		if (currentHeight < 25) {
			hideBottomSheet()
		} else if (currentHeight > 75) {
			updateSheetHeight(100)
		} else {
			updateSheetHeight(50)
		}
	}

	async function handleOpen() {
		if (isOpen) {
			await tick()
			updateSheetHeight(50)
			document.body.style.overflowY = "hidden"
		}
	}

	$effect(() => {
		handleOpen()
	})

	onMount(() => {
		document.addEventListener("mousemove", dragging)
		document.addEventListener("mouseup", dragStop)
		document.addEventListener("touchmove", dragging)
		document.addEventListener("touchend", dragStop)

		return () => {
			document.removeEventListener("mousemove", dragging)
			document.removeEventListener("mouseup", dragStop)
			document.removeEventListener("touchmove", dragging)
			document.removeEventListener("touchend", dragStop)
		}
	})
</script>

<div
	{...rest}
	bind:this={bottomSheet}
	class={classMapUtil(className, "bottomSheet", {
		show: isOpen
	})}
>
	<div bind:this={sheetContent} class="content">
		<div class="header">
			<div
				class="dragIcon"
				tabindex="0"
				role="slider"
				aria-label="Resize bottom sheet"
				aria-valuemin="25"
				aria-valuemax="100"
				aria-valuenow={currentHeight}
				onmousedown={dragStart}
				ontouchstart={dragStart}
				onkeydown={(e) => {
					if (e.key === "ArrowUp") updateSheetHeight(currentHeight + 10)
					if (e.key === "ArrowDown") updateSheetHeight(currentHeight - 10)
				}}
			>
				<span></span>
			</div>
		</div>

		<div class="body">
			{@render children?.()}
		</div>
	</div>
</div>

<style>
	.bottomSheet {
		position: fixed;
		bottom: 0;
		width: 100%;
		display: flex;
		opacity: 0;
		pointer-events: none;
		align-items: center;
		flex-direction: column;
		justify-content: flex-end;
		transition: 0.1s linear;
		z-index: 999;
		left: 0;
		margin: 0;
		right: 0;
		box-sizing: initial;
	}

	.bottomSheet.show {
		opacity: 1;
		pointer-events: auto;
	}

	.bottomSheet .content {
		width: 100%;
		position: relative;
		background: var(--ff-surface);
		color: var(--ff-on-surface);
		max-height: 100vh;
		height: 50vh;
		max-width: 1150px;
		padding: 1.5rem 2rem;
		transform: translateY(100%);
		border-radius: var(--radius-lg) var(--radius-lg) 0 0;
		box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
		transition: 0.3s ease;
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
	}

	.bottomSheet.show .content {
		transform: translateY(0%);
	}

	.bottomSheet.dragging .content {
		transition: none;
	}

	.bottomSheet.fullscreen {
		top: 0;
	}

	.bottomSheet.fullscreen .content {
		border-radius: 0;
		overflow-y: hidden;
	}

	.bottomSheet .header {
		display: flex;
		justify-content: center;
	}

	.header .dragIcon {
		cursor: grab;
		user-select: none;
		padding: 0.75rem;
		margin-top: 0.75rem;
	}

	.header .dragIcon span {
		height: 4px;
		width: 40px;
		display: block;
		background: var(--ff-primary);
		border-radius: var(--radius-pill);
	}

	.bottomSheet .body {
		height: 100%;
		overflow-y: auto;
		padding: 1rem 0 1.5rem;
		scrollbar-width: none;
	}

	.bottomSheet .body::-webkit-scrollbar {
		width: 0;
	}
</style>

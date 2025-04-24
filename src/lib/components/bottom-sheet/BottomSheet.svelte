<script lang="ts">
  import classMapUtil from "../../utils/classMapUtil.js"
  import { onMount, tick } from "svelte"
  import type { ClassValue, HTMLAttributes } from "svelte/elements"

  interface Props extends HTMLAttributes<HTMLDivElement> {
    class?: ClassValue
    open: boolean
    handleClose: () => void
  }

  let {
    class: className = "",
    open,
    handleClose,
    children,
    ...rest
  }: Props = $props()

  let bottomSheet: HTMLDivElement
  let sheetContent: HTMLDivElement
  let dragIcon: HTMLDivElement

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
    if (open) {
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
  class={classMapUtil({
    bottomSheet: true,
    show: open,
  })}
>
  <button
    class="sheetOverlay"
    type="button"
    aria-label="Fechar bottom sheet"
    onclick={hideBottomSheet}
  ></button>

  <div bind:this={sheetContent} class="content">
    <div class="header">
      <div
        bind:this={dragIcon}
        class="dragIcon"
        tabindex="0"
        role="slider"
        aria-label="Redimensionar bottom sheet"
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
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    opacity: 0;
    pointer-events: none;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;
    transition: 0.1s linear;
    z-index: 999;
  }
  .bottomSheet.show {
    opacity: 1;
    pointer-events: auto;
  }
  .bottomSheet .sheetOverlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    background: #000;
  }
  .bottomSheet .content {
    width: 100%;
    position: relative;
    background: var(--color-white);
    max-height: 100vh;
    height: 50vh;
    max-width: 1150px;
    padding: 25px 30px;
    transform: translateY(100%);
    border-radius: 12px 12px 0 0;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.03);
    transition: 0.3s ease;
  }
  .bottomSheet.show .content {
    transform: translateY(0%);
  }
  .bottomSheet.dragging .content {
    transition: none;
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
    padding: 15px;
    margin-top: -15px;
  }
  .header .dragIcon span {
    height: 4px;
    width: 40px;
    display: block;
    background: var(--color-info-light);
    border-radius: 50px;
  }
  .bottomSheet .body {
    height: 100%;
    overflow-y: auto;
    padding: 15px 0 40px;
    scrollbar-width: none;
  }
  .bottomSheet .body::-webkit-scrollbar {
    width: 0;
  }
</style>

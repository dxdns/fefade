<script lang="ts">
  import classMapUtil from "../../utils/classMapUtil.js"
  import styles from "./InputFile.module.css"
  import type { ClassValue, HTMLAttributes } from "svelte/elements"
  import { inputDropAction } from "../../actions/index.js"

  interface Props extends HTMLAttributes<HTMLDivElement> {
    class?: ClassValue
    onDropEvent?: (files: File[]) => void
  }

  let {
    class: className = "",
    onDropEvent,
    children,
    ...rest
  }: Props = $props()

  let files = $state<File[]>([])
  let isDragging = $state(false)

  function handleDrop(newFiles: File[]) {
    const filesData = [...files, ...newFiles]
    files = filesData
    onDropEvent?.(filesData)
  }
</script>

<div
  {...rest}
  use:inputDropAction={{
    onFiles: handleDrop,
    setIsDragging: (v: boolean) => {
      isDragging = v
    },
  }}
  class={classMapUtil({
    [className as string]: true,
    [styles.dropzone]: true,
    [styles.dragging]: isDragging,
  })}
  role="region"
>
  {@render children?.()}
  <input
    type="file"
    multiple
    onchange={(e) => {
      handleDrop(Array.from((e.target as HTMLInputElement).files || []))
    }}
  />
</div>

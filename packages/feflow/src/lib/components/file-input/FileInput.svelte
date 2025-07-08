<script lang="ts">
	import { classMapUtil } from "@dxdns/feflow-core/utils"
	import styles from "./FileInput.module.css"
	import type { HTMLInputAttributes } from "svelte/elements"
	import { inputDropAction } from "../../actions/index.js"

	interface Props extends Omit<HTMLInputAttributes, "type"> {
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
		files = newFiles
		onDropEvent?.(newFiles)
	}
</script>

<div
	class={classMapUtil(className, [className, styles], styles.dropzone, {
		[styles.dragging]: isDragging
	})}
	use:inputDropAction={{
		onFiles: handleDrop,
		setIsDragging: (v: boolean) => {
			isDragging = v
		}
	}}
	role="region"
>
	{@render children?.()}
	<input
		{...rest}
		type="file"
		onchange={(e) => {
			if (files.length > 0 && !rest.multiple) return
			const input = e.target as HTMLInputElement
			const selectedFiles = Array.from(input.files || [])
			handleDrop(selectedFiles)
			files = []
			input.value = ""
		}}
		style={undefined}
	/>
</div>

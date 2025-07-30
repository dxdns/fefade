<script lang="ts">
	import { classMapUtil } from "@dxdns/feflow-core/utils"
	import type { HTMLInputAttributes } from "svelte/elements"
	import { inputDropAction } from "@dxdns/feflow-core/actions"
	import styles from "@dxdns/feflow-core/styles/FileInput.module.css"

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

	function handleChange(
		e: Event & {
			currentTarget: EventTarget & HTMLInputElement
		}
	) {
		if (files.length > 0 && !rest.multiple) return
		const input = e.target as HTMLInputElement
		const selectedFiles = Array.from(input.files || [])
		handleDrop(selectedFiles)

		files = []
		input.value = ""
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
	style={rest.style}
>
	{@render children?.()}
	<input {...rest} type="file" onchange={handleChange} style={undefined} />
</div>

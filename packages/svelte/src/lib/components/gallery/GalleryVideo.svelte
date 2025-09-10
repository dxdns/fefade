<script lang="ts">
	import { classMapUtil, handleClickUtil } from "@dxdns-kit/core/utils"
	import type {
		GalleryItemType,
		HTMLAttrAnchor,
		VideoType
	} from "@dxdns-kit/core/types"
	import styles from "@dxdns-kit/core/styles/GalleryItem.module.css"
	import type { HTMLVideoAttributes } from "svelte/elements"
	import { Video } from "../video/index.js"
	import { createPortalAction } from "@dxdns-kit/core/actions"
	import Modal from "../modal/index.js"

	type HTMLVideoAttr = Omit<HTMLVideoAttributes, "src">

	interface Props
		extends HTMLVideoAttr,
			GalleryItemType<{}, HTMLVideoAttr>,
			HTMLAttrAnchor,
			VideoType {}

	let {
		class: className = "",
		lazy = false,
		dataSrc,
		href,
		target = "_self",
		download,
		viewer,
		children,
		...rest
	}: Props = $props()

	let isOpen = $state(false)
	let selectedEl: HTMLVideoElement | undefined = $state()

	function handleOpen() {
		isOpen = true
	}

	function handleClose() {
		isOpen = false
		selectedEl = undefined
	}

	function handleClick(e: any) {
		handleClickUtil({
			href,
			download,
			target,
			onClick: () => {
				rest.onclick?.(e)
			}
		})
	}

	function handleVideoClick(
		e: MouseEvent & { currentTarget: EventTarget & HTMLVideoElement }
	) {
		if (viewer) {
			selectedEl = e.currentTarget
			handleOpen()
		}

		handleClick(e)
	}
</script>

{#if viewer && isOpen && selectedEl}
	<div use:createPortalAction>
		<Modal {isOpen} style="border: none;" {handleClose}>
			<Modal.Content
				style="
				text-align: center; 
				overflow: hidden; 
				padding: 0;
				"
			>
				<video
					{...rest}
					{...viewer}
					src={selectedEl.src || selectedEl.querySelector("source")?.src || ""}
				></video>
			</Modal.Content>
		</Modal>
	</div>
{/if}

<figure
	class={classMapUtil(className, [className, styles], styles.galleryItem)}
	style="cursor: {rest.onclick || viewer ? 'pointer' : 'default'};"
>
	<Video
		{...rest}
		class={styles.thumbnail}
		{lazy}
		{dataSrc}
		onclick={handleVideoClick}
	/>

	<figcaption>
		{@render children?.()}
	</figcaption>
</figure>

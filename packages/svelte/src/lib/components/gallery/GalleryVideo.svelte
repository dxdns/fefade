<script lang="ts">
	import {
		classMapUtil,
		handleClickUtil,
		styleToStringUtil
	} from "@fefade/core/utils"
	import type {
		CSSKebabType,
		GalleryItemType,
		HTMLAttrAnchor,
		VideoType
	} from "@fefade/core/types"
	import styles from "@fefade/core/styles/GalleryItem.module.css"
	import type { HTMLVideoAttributes } from "svelte/elements"
	import { Video } from "../video/index.js"
	import { createPortalAction } from "@fefade/core/actions"
	import Modal from "../modal/index.js"

	type HTMLVideoAttr = Omit<HTMLVideoAttributes, "src">

	interface Props
		extends HTMLVideoAttr,
			GalleryItemType<CSSKebabType, HTMLVideoAttr>,
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
		captionStyle,
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
	class={classMapUtil(className, [className, styles], styles.galleryItem, {
		["clickable"]: rest.onclick || viewer || href
	})}
>
	<Video
		{...rest}
		class={styles.thumbnail}
		{lazy}
		{dataSrc}
		onclick={handleVideoClick}
	/>

	<figcaption class={styles.caption} style={styleToStringUtil(captionStyle)}>
		{@render children?.()}
	</figcaption>
</figure>

<script lang="ts">
	import {
		classMapUtil,
		handleClickUtil,
		styleToStringUtil
	} from "@dxdns-kit/core/utils"
	import type {
		CSSKebabType,
		GalleryItemType,
		HTMLAttrAnchor,
		ImageType
	} from "@dxdns-kit/core/types"
	import styles from "@dxdns-kit/core/styles/GalleryItem.module.css"
	import type { HTMLImgAttributes } from "svelte/elements"
	import { Image } from "../image/index.js"
	import { createPortalAction } from "@dxdns-kit/core/actions"
	import Modal from "../modal/index.js"

	type HTMLImageAttr = Omit<HTMLImgAttributes, "src">

	interface Props
		extends HTMLImageAttr,
			GalleryItemType<CSSKebabType, HTMLImageAttr>,
			HTMLAttrAnchor,
			ImageType {}

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

	let openModal = $state(false)
	let selectedEl: HTMLImageElement | undefined = $state()

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

	function handleImageClick(
		e: MouseEvent & { currentTarget: EventTarget & HTMLImageElement }
	) {
		if (viewer) {
			selectedEl = e.currentTarget
			openModal = true
		}

		handleClick(e)
	}
</script>

{#if viewer && openModal && selectedEl}
	<div use:createPortalAction>
		<Modal
			isOpen={openModal}
			style="border: none;"
			handleClose={() => {
				openModal = false
				selectedEl = undefined
			}}
		>
			<Modal.Content
				style="
				text-align: center; 
				overflow: hidden; 
				padding: 0;
				"
			>
				<img
					{...rest}
					{...viewer}
					src={selectedEl.dataset.dataSrc ?? selectedEl.src}
				/>
			</Modal.Content>
		</Modal>
	</div>
{/if}

<figure
	class={classMapUtil(className, [className, styles], styles.galleryItem, {
		["clickable"]: rest.onclick || viewer || href
	})}
>
	<Image
		{...rest}
		class={styles.thumbnail}
		{lazy}
		{dataSrc}
		onclick={handleImageClick}
	/>

	<figcaption class={styles.caption} style={styleToStringUtil(captionStyle)}>
		{@render children?.()}
	</figcaption>
</figure>

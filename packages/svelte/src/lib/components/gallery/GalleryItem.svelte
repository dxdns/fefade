<script lang="ts">
	import {
		classMapUtil,
		handleClickUtil,
		hasKeysUtil,
		videoUtil
	} from "@dxdns-kit/core/utils"
	import type {
		GalleryItemType,
		GalleryCaptionType,
		HTMLAttrAnchor,
		ImageType,
		VideoType
	} from "@dxdns-kit/core/types"
	import type { Snippet } from "svelte"
	import styles from "@dxdns-kit/core/styles/GalleryItem.module.css"
	import type { HTMLImgAttributes, HTMLVideoAttributes } from "svelte/elements"
	import { Video } from "../video/index.js"
	import { Image } from "../image/index.js"
	import { createPortalAction } from "@dxdns-kit/core/actions"
	import Modal from "../modal/index.js"

	type HTMLVideoAttr = Omit<Omit<HTMLVideoAttributes, "src">, "type">
	type HTMLImageAttr = Omit<HTMLImgAttributes, "src">

	interface BaseProps
		extends GalleryItemType<Snippet<[]> | GalleryCaptionType | undefined>,
			HTMLAttrAnchor {}

	type ImgProps = HTMLImageAttr & BaseProps & ImageType
	type VideoProps = HTMLVideoAttr & BaseProps & VideoType

	type Props = ImgProps | VideoProps

	let {
		class: className = "",
		lazy = false,
		dataSrc,
		caption,
		href,
		target = "_self",
		download,
		viewer,
		children,
		...rest
	}: Props = $props()

	let isOpen = $state(false)
	let selectedEl: HTMLImageElement | HTMLVideoElement | undefined = $state()

	const { isVideo } = videoUtil()

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

	function handleImageClick(
		e: MouseEvent & { currentTarget: EventTarget & HTMLImageElement }
	) {
		if (viewer) {
			selectedEl = e.currentTarget
			handleOpen()
		}

		handleClick(e)
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
				{#if selectedEl instanceof HTMLImageElement}
					<img
						{...rest as HTMLImageAttr}
						src={selectedEl.dataset.dataSrc ?? selectedEl.src}
						height={viewer.height}
						width={viewer.width}
					/>
				{:else if selectedEl instanceof HTMLVideoElement}
					<video
						{...rest as HTMLVideoAttr}
						src={selectedEl.src ||
							selectedEl.querySelector("source")?.src ||
							""}
						height={viewer.height}
						width={viewer.width}
					></video>
				{/if}
			</Modal.Content>
		</Modal>
	</div>
{/if}

<figure
	class={classMapUtil(className, [className, styles], styles.galleryItem)}
>
	{#if isVideo(dataSrc)}
		<Video
			{...rest as HTMLVideoAttr}
			class={styles.thumbnail}
			{lazy}
			{dataSrc}
			onclick={handleVideoClick}
		/>
	{:else}
		<Image
			{...rest as HTMLImageAttr}
			class={styles.thumbnail}
			{lazy}
			{dataSrc}
			onclick={handleImageClick}
		/>
	{/if}

	{#if children}
		{@render children?.()}
	{:else if caption && hasKeysUtil<GalleryCaptionType>(caption)}
		<figcaption style={caption.style}>
			<h3 style="--label-lines: {caption.label.lines ?? 3};">
				{caption.label.text}
			</h3>

			{#if caption.description}
				<p style="--description-lines: {caption.description.lines ?? 2};">
					{caption.description.text}
				</p>
			{/if}
		</figcaption>
	{:else if caption && typeof caption === "function"}
		{@render caption?.()}
	{/if}
</figure>

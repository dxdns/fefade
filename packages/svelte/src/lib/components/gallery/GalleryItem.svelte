<script lang="ts">
	import {
		classMapUtil,
		handleClickUtil,
		hasKeysUtil,
		videoUtil
	} from "@dxdns/feflow-core/utils"
	import type {
		GalleryItemType,
		GalleryCaptionType,
		HTMLAttrAnchor,
		ImageType,
		GalleryMediaType
	} from "@dxdns/feflow-core/types"
	import type { Snippet } from "svelte"
	import styles from "@dxdns/feflow-core/styles/GalleryItem.module.css"
	import type { HTMLImgAttributes, HTMLVideoAttributes } from "svelte/elements"
	import { Video } from "../video/index.js"
	import { Image } from "../image/index.js"

	interface BaseProps
		extends GalleryItemType<Snippet<[]> | GalleryCaptionType | undefined>,
			HTMLAttrAnchor,
			GalleryMediaType {}

	type ImgProps = Omit<HTMLImgAttributes, "src"> & BaseProps & ImageType
	type VideoProps = Omit<HTMLVideoAttributes, "src"> & BaseProps

	type Props = ImgProps | VideoProps

	let {
		class: className = "",
		lazy = false,
		dataSrc,
		caption,
		href,
		target = "_self",
		download,
		children,
		...rest
	}: Props = $props()

	const { isVideo } = videoUtil()

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
</script>

<figure
	class={classMapUtil(className, [styles, className], styles.galleryItem)}
>
	{#if isVideo(dataSrc)}
		<Video
			{...rest as HTMLVideoAttributes}
			class={styles.thumbnail}
			{lazy}
			{dataSrc}
			onclick={handleClick}
		/>
	{:else}
		<Image
			{...rest as HTMLImgAttributes}
			class={styles.thumbnail}
			{lazy}
			{dataSrc}
			onclick={handleClick}
		/>
	{/if}

	{#if children}
		{@render children?.()}
	{:else if caption && hasKeysUtil<GalleryCaptionType>(caption)}
		<figcaption class={styles.caption} style={caption.style}>
			<h3 style="--label-lines: {caption.label.lines ?? 3};">
				{caption.label.text}
			</h3>
			<p style="--description-lines: {caption.description.lines ?? 2};">
				{caption.description.text}
			</p>
		</figcaption>
	{:else if caption && typeof caption === "function"}
		{@render caption?.()}
	{/if}
</figure>

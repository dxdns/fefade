<script lang="ts">
	import type { HTMLVideoAttributes } from "svelte/elements"
	import { classMapUtil, handleClickUtil } from "@dxdns/feflow-core/utils"
	import type {
		HTMLAttrAnchor,
		GalleryItemType,
		VideoType,
		GalleryCaptionType
	} from "@dxdns/feflow-core/types"
	import { Video } from "../video/index.js"
	import styles from "@dxdns/feflow-core/styles/GalleryItem.module.css"
	import type { Snippet } from "svelte"
	import GalleryItem from "./GalleryItem.svelte"

	interface Props
		extends Omit<HTMLVideoAttributes, "src">,
			HTMLAttrAnchor,
			GalleryItemType<Snippet<[]> | GalleryCaptionType | undefined>,
			VideoType {}

	let {
		class: className = "",
		lazy = false,
		dataSrc,
		href,
		target = "_self",
		download,
		caption,
		children,
		...rest
	}: Props = $props()

	const videoExtensions = [".mp4", ".webm", ".ogg", ".mov", ".avi", ".mkv"]

	function isVideo() {
		return videoExtensions.some((ext) => dataSrc.toLowerCase().endsWith(ext))
	}

	function getVideoType() {
		if (isVideo()) {
			for (const ext of videoExtensions) {
				if (dataSrc.toLowerCase().split("?")[0].split("#")[0].endsWith(ext)) {
					return ext
				}
			}
		}
		return videoExtensions[0]
	}
</script>

<GalleryItem {caption}>
	<Video
		{...rest}
		class={classMapUtil(className, [className, styles])}
		{lazy}
		onclick={(e) => {
			handleClickUtil({
				href,
				download,
				target,
				onClick: () => {
					rest.onclick?.(e)
				}
			})
		}}
	>
		<source
			class={styles.thumbnail}
			src={dataSrc}
			type="video/{getVideoType().replace('.', '')}"
		/>
		{@render children?.()}
	</Video>
</GalleryItem>

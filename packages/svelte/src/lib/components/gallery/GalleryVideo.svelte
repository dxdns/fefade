<script lang="ts">
	import type { HTMLVideoAttributes } from "svelte/elements"
	import { classMapUtil, handleClickUtil } from "@dxdns/feflow-core/utils"
	import type {
		HTMLAttrAnchor,
		GalleryItemType,
		VideoType
	} from "@dxdns/feflow-core/types"
	import { Video } from "../video/index.js"
	import styles from "@dxdns/feflow-core/styles/GalleryItem.module.css"

	interface Props
		extends Omit<HTMLVideoAttributes, "src">,
			HTMLAttrAnchor,
			Omit<GalleryItemType, "caption">,
			VideoType {}

	let {
		class: className = "",
		lazy = false,
		dataSrc,
		href,
		target = "_self",
		download,
		extension = "mp4",
		children,
		...rest
	}: Props = $props()

	function getVideoType() {
		const exts = [".mp4", ".webm", ".ogg", ".mov", ".avi", ".mkv"]
		const hasExt = exts.some((ext) => dataSrc.toLowerCase().endsWith(ext))

		if (hasExt) {
			for (const ext of exts) {
				if (dataSrc.toLowerCase().split("?")[0].split("#")[0].endsWith(ext)) {
					return ext
				}
			}
		}
		return extension
	}
</script>

<Video
	{...rest}
	class={classMapUtil(className, [styles, className], styles.galleryItem)}
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

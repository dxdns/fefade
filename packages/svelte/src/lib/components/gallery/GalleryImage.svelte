<script lang="ts">
	import type { HTMLImgAttributes } from "svelte/elements"
	import { Image } from "../image/index.js"
	import { classMapUtil, handleClickUtil } from "@dxdns/feflow-core/utils"
	import type {
		HTMLAttrAnchor,
		GalleryItemType,
		GalleryCaptionType,
		ImageType
	} from "@dxdns/feflow-core/types"
	import type { Snippet } from "svelte"
	import styles from "@dxdns/feflow-core/styles/GalleryItem.module.css"
	import GalleryItem from "./GalleryItem.svelte"

	interface Props
		extends Omit<HTMLImgAttributes, "src">,
			HTMLAttrAnchor,
			GalleryItemType<Snippet<[]> | GalleryCaptionType | undefined>,
			ImageType {}

	let {
		class: className = "",
		lazy = false,
		dataSrc,
		caption,
		fallback,
		href,
		target = "_self",
		download,
		children,
		...rest
	}: Props = $props()
</script>

<GalleryItem {caption}>
	<Image
		{...rest}
		class={classMapUtil(className, [className, styles], styles.thumbnail)}
		{lazy}
		{dataSrc}
		{fallback}
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
	/>
	{@render children?.()}
</GalleryItem>

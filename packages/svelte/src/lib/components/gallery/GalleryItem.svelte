<script lang="ts">
	import type { HTMLImgAttributes } from "svelte/elements"
	import { Image } from "../image/index.js"
	import {
		classMapUtil,
		handleClickUtil,
		hasKeysUtil
	} from "@dxdns/feflow-core/utils"
	import type {
		HTMLAttrAnchor,
		GalleryItemType,
		GalleryCaptionType
	} from "@dxdns/feflow-core/types"
	import type { Snippet } from "svelte"
	import styles from "@dxdns/feflow-core/styles/GalleryItem.module.css"

	interface Props
		extends Omit<HTMLImgAttributes, "src">,
			HTMLAttrAnchor,
			GalleryItemType<Snippet<[]> | GalleryCaptionType | undefined> {}

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

<figure
	class={classMapUtil(className, [styles, className], styles.galleryItem)}
>
	<Image
		{...rest}
		class={styles.image}
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
	{#if children}
		{@render children?.()}
	{:else if caption && hasKeysUtil<GalleryCaptionType>(caption)}
		<figcaption class={styles.caption}>
			<h3>{caption.title}</h3>
			<p>{caption.description}</p>
		</figcaption>
	{:else if caption && typeof caption === "function"}
		{@render caption?.()}
	{/if}
</figure>

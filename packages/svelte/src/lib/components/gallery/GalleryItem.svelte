<script lang="ts">
	import type {
		HTMLAttributeAnchorTarget,
		HTMLImgAttributes
	} from "svelte/elements"
	import { Image } from "../image/index.js"
	import { classMapUtil } from "@dxdns/feflow-core/utils"
	import styles from "./GalleryItem.module.css"

	interface Props extends Omit<HTMLImgAttributes, "src"> {
		lazy?: boolean
		dataSrc: string
		caption?: {
			title: string
			description: string
		}
		fallback?: string
		href?: string
		target?: HTMLAttributeAnchorTarget
	}

	let {
		class: className = "",
		lazy = false,
		dataSrc,
		caption,
		fallback,
		href,
		target = "_self",
		...rest
	}: Props = $props()

	function handleClick(
		event: MouseEvent & {
			currentTarget: HTMLImageElement
		}
	) {
		if (href) {
			window.open(href, target)
		} else {
			rest.onclick?.(event)
		}
	}
</script>

<figure
	class={classMapUtil(className, [styles, className], styles.galleryItem)}
>
	<Image
		{...rest}
		class={styles.image}
		hover={{ transition: "scale" }}
		{lazy}
		{dataSrc}
		{fallback}
		onclick={handleClick}
	/>
	{#if caption}
		<figcaption class={styles.caption}>
			<h3>{caption.title}</h3>
			<p>{caption.description}</p>
		</figcaption>
	{/if}
</figure>

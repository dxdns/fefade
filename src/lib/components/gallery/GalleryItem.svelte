<script lang="ts">
	import type { HTMLImgAttributes } from "svelte/elements"
	import { Image } from "../image/index.js"
	import { classMapUtil } from "../../utils/index.js"
	import styles from "./GalleryItem.module.css"

	interface Props extends Omit<HTMLImgAttributes, "src"> {
		lazy?: boolean
		dataSrc: string
		caption?: {
			title: string
			description: string
		}
	}

	let {
		class: className = "",
		lazy = false,
		dataSrc,
		caption,
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
		hover={{ transition: "scale" }}
	/>
	{#if caption}
		<figcaption class={styles.caption}>
			<h3>{caption.title}</h3>
			<p>{caption.description}</p>
		</figcaption>
	{/if}
</figure>

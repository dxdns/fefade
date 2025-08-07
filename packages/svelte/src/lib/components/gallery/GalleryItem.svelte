<script lang="ts">
	import { classMapUtil, hasKeysUtil } from "@dxdns/feflow-core/utils"
	import type {
		GalleryItemType,
		GalleryCaptionType
	} from "@dxdns/feflow-core/types"
	import type { Snippet } from "svelte"
	import styles from "@dxdns/feflow-core/styles/GalleryItem.module.css"

	interface Props
		extends GalleryItemType<Snippet<[]> | GalleryCaptionType | undefined> {
		class?: string
		children?: Snippet<[]>
	}

	let { class: className = "", caption, children }: Props = $props()
</script>

<figure
	class={classMapUtil(className, [styles, className], styles.galleryItem)}
>
	{@render children?.()}

	{#if caption && hasKeysUtil<GalleryCaptionType>(caption)}
		<figcaption class={styles.caption}>
			<h3>{caption.title}</h3>
			<p>{caption.description}</p>
		</figcaption>
	{:else if caption && typeof caption === "function"}
		{@render caption?.()}
	{/if}
</figure>

<script lang="ts">
	import { imageAction } from "@dxdns/feflow-core/actions"
	import type { HTMLImgAttributes } from "svelte/elements"
	import type { GalleryMediaType, ImageType } from "@dxdns/feflow-core/types"

	interface Props
		extends Omit<HTMLImgAttributes, "src">,
			ImageType,
			GalleryMediaType {}

	let {
		class: className = "",
		lazy = false,
		dataSrc,
		fallback,
		...rest
	}: Props = $props()
</script>

<img
	{...rest}
	use:imageAction={{ lazy }}
	class={className}
	data-src={dataSrc}
	data-fallback={fallback}
	loading={lazy ? "lazy" : undefined}
	decoding={lazy ? "async" : undefined}
/>

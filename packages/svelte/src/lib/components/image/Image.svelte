<script lang="ts">
	import { imageAction } from "@dxdns-kit/core/actions"
	import type { HTMLImgAttributes } from "svelte/elements"
	import type { GalleryMediaType, ImageType } from "@dxdns-kit/core/types"

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

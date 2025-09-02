<script lang="ts">
	import { videoAction } from "@dxdns-kit/core/actions"
	import type { GalleryMediaType } from "@dxdns-kit/core/types"
	import { videoUtil } from "@dxdns-kit/core/utils"
	import type { HTMLVideoAttributes } from "svelte/elements"

	interface Props extends Omit<HTMLVideoAttributes, "src">, GalleryMediaType {}

	let { class: className = "", lazy, dataSrc, ...rest }: Props = $props()

	const { getVideoType } = videoUtil()

	let el: HTMLVideoElement
</script>

<video
	{...rest}
	use:videoAction={{ lazy }}
	bind:this={el}
	class={className}
	preload={lazy ? "none" : undefined}
	onmouseenter={() => {
		el.pause()
	}}
	onmouseleave={() => {
		el.play()
	}}
	data-src={dataSrc}
>
	<source type="video/{getVideoType(dataSrc).replace('.', '')}" />
</video>

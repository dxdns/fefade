<script lang="ts">
	import { videoAction } from "@fefade/core/actions"
	import type { VideoType } from "@fefade/core/types"
	import { videoUtil } from "@fefade/core/utils"
	import type { HTMLVideoAttributes } from "svelte/elements"

	interface Props
		extends Omit<Omit<Omit<HTMLVideoAttributes, "src">, "color">, "type">,
			VideoType {}

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

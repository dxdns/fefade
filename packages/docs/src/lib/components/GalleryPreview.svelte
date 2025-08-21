<script lang="ts">
	import { Gallery, Modal } from "@feflow-ui/svelte"
	import { onDestroy, tick } from "svelte"
	import type { HTMLVideoAttributes } from "svelte/elements"
	import { videoUtil } from "@feflow-ui/core/utils"

	let isOpen = $state(false)
	let elImg: HTMLImageElement | undefined

	const sizes = [200, 250, 650, 750, 850, 950, 300, 350, 450, 550]

	const { isVideo } = videoUtil()

	async function handleClick(src: string, size: number) {
		isOpen = true

		await tick()

		if (elImg) {
			elImg.src = src
			elImg.width = size
			elImg.height = size
		}
	}

	onDestroy(() => {
		elImg = undefined
	})
</script>

<Modal
	{isOpen}
	style="border: none;"
	handleClose={() => {
		isOpen = false
		elImg = undefined
	}}
>
	<Modal.Content
		style="
		text-align: center;
		padding: 0;
		"
	>
		<img alt="" bind:this={elImg} />
	</Modal.Content>
</Modal>

<h1>default</h1>
<Gallery>
	{#each sizes.slice(0, 4) as size (size)}
		{@const src = `https://dummyjson.com/image/${size}`}
		<Gallery.Item
			lazy
			dataSrc={src}
			alt={`Image ${size}px`}
			width={size}
			height={size}
			onclick={() => {
				handleClick(src, size)
			}}
			style="cursor: pointer;"
		/>
	{/each}
</Gallery>

<br />
<h1>columns</h1>
<Gallery columns={1}>
	{#each sizes.slice(0, 6) as size (size)}
		{@const src = `https://dummyjson.com/image/${size}`}
		<Gallery.Item
			lazy
			caption={{
				label: { text: `title ${size}` },
				description: { text: `description ${size}` }
			}}
			dataSrc={src}
			alt={`Image ${size}px`}
			width={size}
			height={size}
			onclick={() => {
				handleClick(src, size)
			}}
			style="cursor: pointer;"
		/>
	{/each}
</Gallery>

<br />
<h1>masonry</h1>
<Gallery variant="masonry" gap="1rem">
	{#each sizes as size, i (size)}
		{@const src =
			i === 0
				? "https://res.cloudinary.com/dkufrbqih/video/upload/v1754577218/4_-_J5bdBP9_tifpyb.mp4"
				: `https://dummyjson.com/image/${size}`}
		<Gallery.Item
			lazy
			{...isVideo(src)
				? ({
						autoplay: true,
						muted: true,
						loop: true,
						href: src,
						target: "_blank"
					} as HTMLVideoAttributes)
				: {}}
			caption={{
				label: {
					text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio doloremque magnam sed aliquam assumenda! ${size}`,
					lines: 1
				},
				description: {
					text: `Praesentium adipisci, illo, atque non optio sit necessitatibus placeat, sunt ut distinctio repellendus ullam repudiandae! Quaerat. ${size}`,
					lines: 1
				}
			}}
			dataSrc={src}
			alt={`Image ${size}px`}
			width={size}
			height={size}
			onclick={() => {
				if (i > 0) {
					handleClick(src, size)
				}
			}}
			style="cursor: pointer;"
		/>
	{/each}
</Gallery>

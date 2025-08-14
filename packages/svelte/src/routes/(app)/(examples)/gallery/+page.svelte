<script lang="ts">
	import { Gallery, Modal } from "@/index.js"
	import { videoUtil } from "@dxdns/feflow-core/utils"
	import { onDestroy, tick } from "svelte"
	import type { HTMLVideoAttributes } from "svelte/elements"

	let isOpen = $state(false)
	let elImg: HTMLImageElement | undefined

	const { isVideo } = videoUtil()
	const sizes = [200, 250, 650, 750, 850, 950, 300, 350, 450, 550]

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
		overflow: hidden; 
		padding: 0;
		"
	>
		<img alt="" bind:this={elImg} />
	</Modal.Content>
</Modal>

<div style="width: 800px; margin: 3rem auto; line-height: 2;">
	<h1>default</h1>
	<Gallery>
		{#each sizes.slice(0, 4) as size (size)}
			{@const src = `https://dummyjson.com/image/${size}`}
			<button
				style="all: unset; cursor: pointer;"
				onclick={() => {
					handleClick(src, size)
				}}
			>
				<Gallery.Item
					lazy
					dataSrc={src}
					alt={`Image ${size}px`}
					width={size}
					height={size}
				/>
			</button>
		{/each}
	</Gallery>

	<br />
	<h1>columns</h1>
	<Gallery columns={2}>
		{#each sizes.slice(0, 6) as size (size)}
			{@const src = `https://dummyjson.com/image/${size}`}
			<button
				style="all: unset; cursor: pointer;"
				onclick={() => {
					handleClick(src, size)
				}}
			>
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
				/>
			</button>
		{/each}
	</Gallery>

	<br />
	<h1>masonry</h1>
	<Gallery variant="masonry" gap={4}>
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
</div>

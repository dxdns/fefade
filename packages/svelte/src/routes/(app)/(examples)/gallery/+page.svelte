<script lang="ts">
	import { Gallery, Modal } from "@/index.js"
	import { onDestroy, tick } from "svelte"

	let isOpen = $state(false)
	let elImg: HTMLImageElement | undefined

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
		{#each [200, 250, 300, 350] as size (size)}
			{@const src = `https://dummyjson.com/image/${size}`}
			<button
				style="all: unset; cursor: pointer;"
				onclick={() => {
					handleClick(src, size)
				}}
			>
				<Gallery.Image
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
		{#each [200, 250, 300, 350, 450, 550] as size (size)}
			{@const src = `https://dummyjson.com/image/${size}`}
			<button
				style="all: unset; cursor: pointer;"
				onclick={() => {
					handleClick(src, size)
				}}
			>
				<Gallery.Image
					lazy
					caption={{
						title: `title ${size}`,
						description: `description ${size}`
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
		{#each [200, 250, 300, 350, 450, 550, 650, 750, 850, 950] as size, i (size)}
			{@const src = `https://dummyjson.com/image/${size}`}
			<button
				style="all: unset; cursor: pointer;"
				onclick={() => {
					if (i !== 0) handleClick(src, size)
				}}
			>
				<Gallery.Image
					lazy
					caption={{
						title: `title ${size}`,
						description: `description ${size}`
					}}
					dataSrc={src}
					alt={`Image ${size}px`}
					width={size}
					height={size}
					href={i === 0 ? "https://dxdns.dev" : undefined}
					target="_blank"
				/>
			</button>
		{/each}
	</Gallery>
	<br />

	<Gallery>
		<Gallery.Video
			autoplay
			loop
			muted
			dataSrc="https://res.cloudinary.com/dkufrbqih/video/upload/v1754577218/4_-_J5bdBP9_tifpyb.mp4"
			height="200px"
			width="200px"
		/>
	</Gallery>
</div>

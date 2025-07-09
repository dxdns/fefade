<script lang="ts">
	import { Gallery, Modal, useMediaQuery } from "feflow-svelte"
	import { onDestroy, tick } from "svelte"

	let isOpen = $state(false)
	let elImg: HTMLImageElement | undefined

	const isMd = $derived(useMediaQuery("max-width", "md"))
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
		isMd.destroy()
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
	{#each sizes.slice(0, 4) as size}
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
<Gallery columns={isMd.value ? 1 : 2}>
	{#each sizes.slice(0, 6) as size}
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
<Gallery variant="masonry" gap={"1rem"}>
	{#each sizes as size}
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

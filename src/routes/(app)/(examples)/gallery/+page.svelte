<script lang="ts">
	import { Gallery, Modal } from "@/lib/index.js"
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

<Gallery>
	{#each [200, 250, 300, 350, 450, 550, 650] as size}
		{@const src = `https://dummyjson.com/image/${size}`}
		<button
			style="cursor: pointer;"
			onclick={() => {
				handleClick(src, size)
			}}
		>
			<Gallery.Item
				style="cursor: pointer;"
				caption={{ title: `title ${size}`, description: `description ${size}` }}
				{src}
				alt={`Image ${size}px`}
				width={size}
				height={size}
			/>
		</button>
	{/each}
</Gallery>

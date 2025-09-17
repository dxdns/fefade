<script lang="ts">
	import { Gallery, Text } from "@fefade/svelte"
	import { videoUtil } from "@fefade/core/utils"

	const sizes = [200, 250, 650, 750, 850, 950, 300, 350, 450, 550]

	const { isVideo } = videoUtil()
</script>

<div style="display: flex; flex-direction: column; gap: 1rem;">
	<div>
		<h1>columns</h1>
		<Gallery columns={1}>
			{#each sizes.slice(0, 6) as size (size)}
				{@const src = `https://dummyjson.com/image/${size}`}
				<Gallery.Image
					lazy
					dataSrc={src}
					alt={`Image ${size}px`}
					width={size}
					height={size}
				/>
			{/each}
		</Gallery>
	</div>

	<div>
		<h1>masonry</h1>
		<Gallery variant="masonry" gap={4}>
			{#each sizes as size, i (size)}
				{@const src =
					i === 0
						? "https://res.cloudinary.com/dkufrbqih/video/upload/v1754577218/4_-_J5bdBP9_tifpyb.mp4"
						: `https://dummyjson.com/image/${size}`}
				{#if isVideo(src)}
					<Gallery.Video
						lazy
						autoplay
						muted
						loop
						dataSrc={src}
						viewer={{
							controls: true,
							style: `
							object-fit: cover; 
							background: black; 
							padding: 2rem; 
							height: 300px;
							`
						}}
					>
						<Text as="h4" lines={1}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
							cupiditate optio quisquam iusto quod vel esse corporis, beatae
							alias unde quos nulla possimus vitae natus animi sequi ab.
							Debitis, facilis?
						</Text>

						<Text as="p" lines={2}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
							omnis totam minus sequi dolorem reprehenderit architecto fugiat!
							Consequuntur recusandae, sequi ut assumenda pariatur accusamus
							nihil. Illo eligendi autem quis deserunt!
						</Text>
					</Gallery.Video>
				{:else}
					<Gallery.Image
						lazy
						dataSrc={src}
						alt={`Image ${size}px`}
						viewer={{ width: 500 }}
					>
						<h4>{`Image ${size}px`}</h4>
						<p>description</p>
					</Gallery.Image>
				{/if}
			{/each}
		</Gallery>
	</div>
</div>

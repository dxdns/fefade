<script lang="ts">
	import { Gallery } from "@/index.js"
	import { videoUtil } from "@dxdns-kit/core/utils"

	const sizes = [200, 250, 650, 750, 850, 950, 300, 350, 450, 550]

	const { isVideo } = videoUtil()
</script>

<div style="width: 800px; margin: 3rem auto; line-height: 2;">
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
					<h3 style="--label-lines: 1;">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
						cupiditate optio quisquam iusto quod vel esse corporis, beatae alias
						unde quos nulla possimus vitae natus animi sequi ab. Debitis,
						facilis?
					</h3>
					<p style="--description-lines: 2;">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
						omnis totam minus sequi dolorem reprehenderit architecto fugiat!
						Consequuntur recusandae, sequi ut assumenda pariatur accusamus
						nihil. Illo eligendi autem quis deserunt!
					</p>
				</Gallery.Video>
			{:else}
				<Gallery.Image
					lazy
					dataSrc={src}
					alt={`Image ${size}px`}
					viewer={{ width: 500 }}
				>
					<h3>{`Image ${size}px`}</h3>
					<p>description</p>
				</Gallery.Image>
			{/if}
		{/each}
	</Gallery>
</div>

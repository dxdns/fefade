<script lang="ts">
	import { Gallery } from "@/lib/index.js"
</script>

<Gallery>
	{#each [200, 250, 300, 350] as size}
		<Gallery.Item
			caption={{ title: `title ${size}`, description: `description ${size}` }}
			src={`https://dummyjson.com/image/${size}`}
			alt={`Image ${size}px`}
			width={size}
			height={size}
		/>
	{/each}
</Gallery>

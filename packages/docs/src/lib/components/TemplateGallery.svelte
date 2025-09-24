<script lang="ts">
	import { Gallery, Text } from "@fefade/svelte"

	interface Props {
		data: {
			title: string
			image: string
			href?: string
		}[]
	}

	let { data }: Props = $props()
</script>

<Gallery gap="2rem" style="grid-auto-rows: 350px;">
	{#each data as { title, image, href } (image)}
		<Gallery.Image lazy dataSrc={image} alt={title} {href}>
			<Text as="h3">
				{title}
			</Text>
		</Gallery.Image>
	{/each}
</Gallery>

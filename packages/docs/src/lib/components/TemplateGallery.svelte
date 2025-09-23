<script lang="ts">
	import { Gallery, Text } from "@fefade/svelte"

	interface Props {
		data: {
			title: string
			src: string
			href?: string
		}[]
	}

	let { data }: Props = $props()
</script>

<Gallery columns={1} minWidth="350px" gap="2rem">
	{#each data as { title, src, href } (src)}
		<Gallery.Image lazy dataSrc={src} alt={title} {href}>
			<Text as="h3">
				{title}
			</Text>
		</Gallery.Image>
	{/each}
</Gallery>

<script lang="ts">
	import { Gallery } from "@navnex-kit/svelte"

	interface Props {
		data: {
			title: string
			src: string
			href: string
		}[]
	}

	let { data }: Props = $props()
</script>

<Gallery columns={1} minWidth="350px" gap="2rem">
	{#each data as { title, src, href } (src)}
		<Gallery.Item
			lazy
			dataSrc={src}
			alt={title}
			style="cursor: pointer;"
			caption={{
				label: { text: title }
			}}
			{href}
		/>
	{/each}
</Gallery>

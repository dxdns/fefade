<script lang="ts">
	import { categoriesData } from "@/data"
	import type { CategoryType } from "@/types"
	import { Button, Card, Gallery, Text } from "@fefade/svelte"

	interface Props {
		data: {
			title: string
			image: string
			href?: string
			categories: string[]
		}[]
	}

	let { data }: Props = $props()

	let newData = $state(data)
	let selectedCategory: CategoryType = $state("All")

	function handleClick(category: CategoryType) {
		if (category === "All") {
			newData = data
		} else {
			newData = data.filter((item) =>
				item.categories
					.map((c) => c.toLowerCase())
					.includes(category.toLowerCase())
			)
		}

		selectedCategory = category
	}
</script>

<Card
	variant="contained"
	style="
		display: flex; 
		gap: 1rem; 
		justify-content: center;
		flex-wrap: wrap;
		"
>
	{#each categoriesData as category (category)}
		<Button
			variant={selectedCategory === category ? "contained" : "outlined"}
			onclick={() => {
				handleClick(category)
			}}
		>
			{category}
		</Button>
	{/each}
</Card>

<Gallery
	columns={newData.length === 1 ? 1 : undefined}
	gap="2rem"
	style="grid-auto-rows: 350px;"
>
	{#each newData as { title, image, href } (image)}
		<Gallery.Image lazy dataSrc={image} alt={title} {href}>
			<Text as="h3" style="color: white;">
				{title}
			</Text>
		</Gallery.Image>
	{/each}
</Gallery>

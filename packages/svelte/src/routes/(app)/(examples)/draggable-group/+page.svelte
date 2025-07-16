<script lang="ts">
	import { DraggableGroup, themeConfig } from "@/index.js"

	const theme = $derived(themeConfig())

	function onChange(item: HTMLElement, index: number) {
		console.log(item.id, index)
	}
</script>

<div style="max-width: 500px; margin: 3rem auto;">
	<DraggableGroup cols={2} gap={4} {onChange}>
		{#each Array.from(Array(4)) as _, i (i)}
			<DraggableGroup.Item
				id={`item-${i}`}
				style="
                padding: 3rem; 
                background: {theme.colors.warning};
                border-radius: 15px;
                "
			>
				<p>item {i}</p>
			</DraggableGroup.Item>
		{/each}
	</DraggableGroup>
</div>

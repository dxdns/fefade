<script lang="ts">
	import {
		Card,
		getSections,
		ScrollSection,
		themeConfig,
		Window
	} from "@dxdns/feflow-svelte"

	const { colors } = $derived(themeConfig())
	const sections = $derived(getSections())
	const sectionsData = Array.from({ length: 25 }, (_, index) => ({
		reference: `Section ${index + 1}`
	}))
</script>

<Window style="max-height: 300px; overflow-y: scroll;">
	<ScrollSection
		data={sections}
		style="
        position: sticky; 
        margin: 0; 
        top: -16px; 
        z-index: 1;
		border-radius: 15px;
        "
	>
		{#each sectionsData as { reference }, i (reference)}
			<Card>
				<ScrollSection.Content
					id={reference}
					style="
					height: 100vh; 
					padding: 1rem;
					display: flex;
					justify-content: center;
					align-items: center;
					background: {i % 2 ? colors.info : colors.warning};
					"
				>
					<h2>{reference}</h2>
				</ScrollSection.Content>
			</Card>
		{/each}
	</ScrollSection>
</Window>

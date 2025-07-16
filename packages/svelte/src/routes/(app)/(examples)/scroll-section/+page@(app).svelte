<script lang="ts">
	import { getSections, ScrollSection } from "@/index.js"

	const sections = $derived(getSections())

	const sectionsData = Array.from({ length: 25 }, (_, index) => ({
		reference: `Section ${index + 1}`
	}))
</script>

<ScrollSection data={sections}>
	{#each sectionsData as { reference }, i (reference)}
		<ScrollSection.Content
			id={reference}
			style="
			height: 100vh; 
			display: flex; 
			justify-content: center; 
			align-items: center;
			margin: 3rem 0;
			background: {i % 2 ? 'green' : 'orange'};
			opacity: 0.7;
			"
		>
			<h2>{reference}</h2>
		</ScrollSection.Content>
	{/each}
</ScrollSection>

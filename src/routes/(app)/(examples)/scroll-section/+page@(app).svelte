<script lang="ts">
	import { getSections, ScrollSection } from "@/lib/index.js"

	const sectionsData = Array.from({ length: 25 }, (_, index) => ({
		reference: `Section ${index + 1}`
	}))
</script>

<ScrollSection data={getSections()}>
	{#each sectionsData as { reference }}
		<ScrollSection.Content
			id={reference}
			style="height: 100vh; border: 1px solid red;"
		>
			<h2>{reference}</h2>
		</ScrollSection.Content>
	{/each}
</ScrollSection>

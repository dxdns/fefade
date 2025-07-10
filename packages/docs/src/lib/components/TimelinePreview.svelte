<script lang="ts">
	import { Card, Timeline } from "@feflow/svelte"
</script>

{#each Array.from({ length: 6 }) as _, i}
	<Timeline>
		<Timeline.Item position={i % 2 ? "left" : "right"}>
			<Card>
				<h2>{2024 - i}</h2>
				<p>
					Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum
					perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret
					expetendis his, te elit voluptua dignissim per, habeo iusto primis ea
					eam.
				</p>
			</Card>
		</Timeline.Item>
	</Timeline>
{/each}

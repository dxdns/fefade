<script lang="ts">
	import { Card } from "@feflow/svelte"

	const variants = ["contained", "outlined"]
</script>

{#each variants as variant}
	<Card variant={variant as any}>
		<h2>{variant}</h2>
	</Card>
{/each}

<Card glowOnHover>
	<h2>glow on hover</h2>
</Card>

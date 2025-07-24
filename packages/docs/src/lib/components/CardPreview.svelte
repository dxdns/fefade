<script lang="ts">
	import { Card } from "@dxdns/feflow-svelte"

	const variants = ["contained", "outlined"]
</script>

{#each variants as variant (variant)}
	<Card variant={variant as any}>
		<h2>{variant}</h2>
	</Card>
{/each}

<Card glowOnHover>
	<h2>glow on hover</h2>
</Card>

<Card animatedBorder>
	<h1>animated border</h1>
</Card>

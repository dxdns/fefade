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

<Card
	animatedBorder={{
		width: "2px",
		primaryColor: "#FF007F",
		secondaryColor: "#8000FF"
	}}
>
	<h1>animated border - custom colors</h1>
</Card>

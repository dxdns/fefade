<script lang="ts">
	import { Card } from "@feflow-ui/svelte"

	let borderWidth = $state(1)
	const variants = ["contained", "outlined"] as const

	function handleClick() {
		borderWidth += 4
	}
</script>

{#each variants as variant (variant)}
	<Card {variant}>
		<h2>{variant}</h2>
	</Card>
{/each}

<Card glowOnHover>
	<h2>glow on hover</h2>
</Card>

<Card animatedBorder>
	<h2>animated border</h2>
</Card>

<Card
	animatedBorder={{
		width: `${borderWidth}px`,
		primaryColor: "#FF007F",
		secondaryColor: "#8000FF"
	}}
	style="cursor: pointer; user-select: none;"
	onclick={handleClick}
>
	<h2>animated border - custom colors</h2>
</Card>

<Card
	animatedBorder={{
		stopOnHover: true,
		width: "2px",
		primaryColor: "#39FF14",
		secondaryColor: "#00FFFF"
	}}
>
	<h2>animated border - stop on hover</h2>
</Card>

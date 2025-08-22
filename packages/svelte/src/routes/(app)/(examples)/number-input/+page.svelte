<script lang="ts">
	import { NumberInput } from "@/index.js"

	let quantity = $state(0)
</script>

<div style="max-width:500px; margin: 3rem auto; line-height: 3;">
	{#each ["text", "contained", "outlined"] as variant, i (variant)}
		<h2>{variant}</h2>
		<NumberInput
			id={`${variant}-${i}`}
			autoFocus
			variant={variant as any}
			bind:value={quantity}
			min={0}
			max={10}
		/>
	{/each}
</div>

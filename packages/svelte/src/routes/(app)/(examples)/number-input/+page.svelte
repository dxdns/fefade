<script lang="ts">
	import { Constants } from "@fefade/core"
	import { NumberInput } from "@/index.js"

	let quantity = $state(0)
</script>

<div style="max-width:500px; margin: 3rem auto; line-height: 3;">
	<br />
	<h2 class="muted">variants</h2>
	{#each Constants.variants as variant, i (variant)}
		<h2>{variant}</h2>
		<NumberInput
			id={`${variant}-${i}`}
			autoFocus
			{variant}
			bind:value={quantity}
			min={0}
			max={10}
		/>
	{/each}

	<br />
	<h2 class="muted">sizes</h2>
	{#each Constants.sizes as size, i (size)}
		<h2>{size}</h2>
		<NumberInput
			id={`${size}-${i}`}
			variant={i % 2 ? "outlined" : "contained"}
			{size}
			bind:value={quantity}
			min={0}
			max={10}
		/>
	{/each}
</div>

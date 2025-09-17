<script lang="ts">
	import { Constants } from "@fefade/core"
	import { NumberInput } from "@fefade/svelte"

	let quantity = $state(0)
</script>

<div style="max-width: 150px; margin: 0 auto;">
	{#each Constants.variants as variant (variant)}
		<NumberInput autoFocus {variant} bind:value={quantity} min={0} max={10} />
	{/each}
	<NumberInput disabled bind:value={quantity} />
</div>

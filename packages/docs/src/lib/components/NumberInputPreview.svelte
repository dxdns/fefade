<script lang="ts">
	import { NumberInput } from "@dxdns/feflow-svelte"

	let quantity = $state(0)
</script>

<div style="max-width: 150px; margin: 0 auto;">
	{#each ["text", "contained", "outlined"] as variant (variant)}
		<NumberInput
			autoFocus
			variant={variant as any}
			bind:value={quantity}
			min={0}
			max={10}
		/>
	{/each}
	<NumberInput disabled bind:value={quantity} />
</div>

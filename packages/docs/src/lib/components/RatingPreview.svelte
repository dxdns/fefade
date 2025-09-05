<script lang="ts">
	import { Rating } from "@dxdns-kit/svelte"
</script>

<div
	style="
	max-width: 500px;
	margin: 3rem auto;
	display: flex; 
	flex-direction: column; 
	gap: 1rem;
	"
>
	<h4>start in</h4>
	{#each Array.from({ length: 5 }, (_, i) => 5 - i) as value (value)}
		<Rating startIn={value} color="blue" />
	{/each}

	<h4>colors</h4>
	{#each ["aqua", "red", "green"] as color, i (i)}
		<Rating startIn={i + 0.5} {color} />
	{/each}

	<h4>sizes</h4>
	{#each ["1rem", "2rem", "48px"] as size, i (i)}
		<Rating startIn={i + 0.5} style="font-size: {size};" />
	{/each}

	<h4>disabled</h4>
	<Rating disabled />
</div>

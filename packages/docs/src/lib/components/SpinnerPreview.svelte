<script lang="ts">
	import { Constants } from "@feflow-ui/core"
	import { Spinner } from "@feflow-ui/svelte"
</script>

<div
	style="
	display: flex;
	flex-wrap: wrap;
	align-items: baseline;
	gap: 1.5rem;
	"
>
	{#each Constants.statusColors as color (color)}
		<div
			style="
			display: flex;
			flex-direction: column;
			align-items: center;
			"
		>
			<Spinner class="text-on-{color}" size="md" />
			<span>{color}</span>
		</div>
	{/each}

	{#each Constants.sizes as size (size)}
		<div
			style="
			display: flex;
			flex-direction: column;
			align-items: center;
			"
		>
			<Spinner {size} color="primary" />
			<span>{size}</span>
		</div>
	{/each}
</div>

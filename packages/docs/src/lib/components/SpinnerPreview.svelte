<script lang="ts">
	import { Spinner } from "@feflow-ui/svelte"

	const colors = ["primary", "success", "warning", "error", "info"] as const
	const sizes = ["xs", "sm", "md", "lg", "xl"] as const
</script>

<div
	style="
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: 1.5rem;
	"
>
	{#each colors as color (color)}
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

	{#each sizes as size (size)}
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

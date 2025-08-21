<script lang="ts">
	import { Badge } from "@feflow-ui/svelte"

	const variants = ["outlined", "contained"] as const
	const colors = ["error", "success", "warning", "info", "primary"] as const
	const sizes = ["xs", "sm", "md", "lg", "xl"] as const
</script>

<div
	style="
    display: flex; 
    flex-wrap: wrap;
    align-items: flex-end;
    gap: 1rem;
    "
>
	{#each colors as color (color)}
		<Badge class="bg-{color} text-on-{color}" size="md">
			{color}
		</Badge>
	{/each}
	{#each variants as variant (variant)}
		<Badge {variant} size="md">
			{variant}
		</Badge>
	{/each}
	{#each sizes as size (size)}
		<Badge roundedFull {size}>
			{size}
		</Badge>
	{/each}
</div>

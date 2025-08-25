<script lang="ts">
	import { Constants } from "@feflow-ui/core"
	import { Badge } from "@feflow-ui/svelte"

	const badgeVariants = ["outlined", "contained"] as const
</script>

<div
	style="
    display: flex; 
    flex-wrap: wrap;
    align-items: flex-end;
    gap: 1rem;
    "
>
	{#each Constants.statusColors as color (color)}
		<Badge class="bg-{color} text-on-{color}" size="md">
			{color}
		</Badge>
	{/each}
	{#each badgeVariants as variant (variant)}
		<Badge {variant} size="md">
			{variant}
		</Badge>
	{/each}
	{#each Constants.sizes as size (size)}
		<Badge roundedFull {size}>
			{size}
		</Badge>
	{/each}
</div>

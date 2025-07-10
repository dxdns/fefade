<script lang="ts">
	import { Badge } from "@feflow/svelte"

	const variants = ["outlined", "text", "contained"]
	const colors = ["error", "success", "warning", "info", "primary"]
	const sizes = ["xs", "sm", "md", "lg", "xl"]
</script>

<div
	style="
    display: flex; 
    flex-wrap: wrap;
    align-items: flex-end;
    gap: 1rem;
    "
>
	{#each colors as color}
		<Badge class="bg-{color} text-on-{color}" size="md">
			{color}
		</Badge>
	{/each}
	{#each variants as variant}
		<Badge variant={variant as any} size="md">
			{variant}
		</Badge>
	{/each}
	{#each sizes as size}
		<Badge roundedFull size={size as any}>
			{size}
		</Badge>
	{/each}
</div>

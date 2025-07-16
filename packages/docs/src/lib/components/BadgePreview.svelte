<script lang="ts">
	import { Badge, type VariantType } from "@dxdns/feflow-svelte"

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
	{#each colors as color (color)}
		<Badge class="bg-{color} text-on-{color}" size="md">
			{color}
		</Badge>
	{/each}
	{#each variants as variant (variant)}
		<Badge variant={variant as VariantType} size="md">
			{variant}
		</Badge>
	{/each}
	{#each sizes as size (size)}
		<Badge roundedFull size={size as any}>
			{size}
		</Badge>
	{/each}
</div>

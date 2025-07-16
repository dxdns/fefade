<script lang="ts">
	import { Window, type VariantType } from "@dxdns/feflow-svelte"

	const variants = ["contained", "outlined"]
</script>

{#each variants as variant (variant)}
	<Window variant={variant as Exclude<VariantType, "text">}>
		<h2>{variant}</h2>
	</Window>
{/each}

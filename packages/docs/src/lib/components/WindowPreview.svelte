<script lang="ts">
	import { Window } from "@dxdns/feflow-svelte"

	const variants = ["contained", "outlined"]
</script>

{#each variants as variant (variant)}
	<Window variant={variant as any}>
		<h2>{variant}</h2>
	</Window>
{/each}

<Window animatedBorder>
	<h2>animated border</h2>
</Window>

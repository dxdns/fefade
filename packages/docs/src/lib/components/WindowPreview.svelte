<script lang="ts">
	import { Window } from "@dxdns/feflow"

	const variants = ["contained", "outlined"]
</script>

{#each variants as variant}
	<Window variant={variant as any}>
		<h2>{variant}</h2>
	</Window>
{/each}

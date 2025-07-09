<script lang="ts">
	import { Window } from "feflow-svelte"

	const variants = ["contained", "outlined"]
</script>

{#each variants as variant}
	<Window variant={variant as any}>
		<h2>{variant}</h2>
	</Window>
{/each}

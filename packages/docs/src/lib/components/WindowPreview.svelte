<script lang="ts">
	import { Window } from "@fefade/svelte"

	const windowVariants = ["contained", "outlined"] as const
</script>

<div style="display: flex; flex-direction: column; gap: 1rem;">
	{#each windowVariants as variant (variant)}
		<Window {variant}>
			<h2>{variant}</h2>
		</Window>
	{/each}

	<Window animatedBorder>
		<h2>animated border</h2>
	</Window>
</div>

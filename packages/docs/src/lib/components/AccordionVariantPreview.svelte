<script lang="ts">
	import { Constants } from "@fefade/core"
	import { Accordion } from "@fefade/svelte"
</script>

<div style="display: flex; flex-direction: column; gap: 1rem;">
	{#each Constants.variants as variant, i (variant)}
		<Accordion id="sec{i}" {variant} label={variant}>
			<div style="line-height: 1.5;">
				<strong>index: {i}</strong>
				<p>
					Id provident praesentium, incidunt, quisquam ullam numquam aliquid
					dolorem, quae labore dignissimos minima assumenda. Reprehenderit
					nostrum minima perferendis eos quisquam ipsa quo!
				</p>
			</div>
		</Accordion>
	{/each}
</div>

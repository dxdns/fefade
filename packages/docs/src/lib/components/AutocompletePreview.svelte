<script lang="ts">
	import { Constants } from "@navnex-kit/core"
	import { Autocomplete, Link } from "@navnex-kit/svelte"

	const data = Array.from(Array(30)).map((_, i) => ({
		id: i,
		label: `test ${i}`
	}))
</script>

{#each Constants.variants as variant (variant)}
	<Autocomplete
		{variant}
		{data}
		filter={(item) => `${item.label}`}
		placeholder="test"
	>
		{#snippet renderInput({ id, label })}
			<Link href="/{id}">
				{label}
			</Link>
		{/snippet}
	</Autocomplete>
{/each}

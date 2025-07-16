<script lang="ts">
	import { Autocomplete, Link } from "@dxdns/feflow-svelte"

	const data = Array.from(Array(30)).map((_, i) => ({
		id: i,
		label: `test ${i}`
	}))

	const variants = ["text", "contained", "outlined"]
</script>

{#each variants as variant (variant)}
	<Autocomplete
		variant={variant as any}
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

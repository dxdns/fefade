<script lang="ts">
	import { Autocomplete, Link } from "@/lib/index.js"

	const data = Array.from(Array(30)).map((_, i) => ({
		id: i,
		label: `Item ${i}`
	}))
</script>

<Autocomplete variant="search" {data} filter={(item) => `${item.label}`}>
	{#snippet renderInput({ id, label })}
		<Link href="/{id}">
			{label}
		</Link>
	{/snippet}
</Autocomplete>

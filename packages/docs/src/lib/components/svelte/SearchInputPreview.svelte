<script lang="ts">
	import { SearchInput } from "@feflow/svelte"

	const variants = ["contained", "text", "outlined"]
</script>

<div style="max-width: 300px; margin: 0 auto;">
	{#each variants as variant}
		<SearchInput placeholder={variant} variant={variant as any} />
		<br />
		<br />
	{/each}
</div>

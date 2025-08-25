<script lang="ts">
	import { Constants } from "@feflow-ui/core"
	import { SearchInput } from "@feflow-ui/svelte"
</script>

<div style="max-width: 300px; margin: 0 auto;">
	{#each Constants.variants as variant (variant)}
		<SearchInput placeholder={variant} {variant} />
		<br />
		<br />
	{/each}
</div>

<script lang="ts">
	import { Constants } from "@fefade/core"
	import { SearchInput } from "@fefade/svelte"
</script>

<div
	style="display: flex; flex-direction: column; gap: 1rem; max-width: 300px; margin: 1rem auto;"
>
	{#each Constants.variants as variant (variant)}
		<SearchInput placeholder={variant} {variant} />
	{/each}
</div>

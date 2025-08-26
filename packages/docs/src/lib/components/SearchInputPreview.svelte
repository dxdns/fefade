<script lang="ts">
	import { Constants } from "@navnex-kit/core"
	import { SearchInput } from "@navnex-kit/svelte"
</script>

<div style="max-width: 300px; margin: 0 auto;">
	{#each Constants.variants as variant (variant)}
		<SearchInput placeholder={variant} {variant} />
		<br />
		<br />
	{/each}
</div>

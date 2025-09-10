<script lang="ts">
	import { Constants } from "@dxdns-kit/core"
	import { SearchInput } from "@dxdns-kit/svelte"
</script>

<div style="display: flex; flex-direction: column; gap: 1rem;">
	{#each Constants.variants as variant (variant)}
		<SearchInput placeholder={variant} {variant} />
	{/each}
</div>

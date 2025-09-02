<script lang="ts">
	import { Constants } from "@dxdns-kit/core"
	import { SearchInput } from "@dxdns-kit/svelte"
</script>

<div style="max-width: 300px; margin: 0 auto;">
	{#each Constants.variants as variant (variant)}
		<SearchInput placeholder={variant} {variant} />
		<br />
		<br />
	{/each}
</div>

<script lang="ts">
	import { Constants } from "@dxdns-kit/core"
	import { PasswordInput } from "@dxdns-kit/svelte"
</script>

<div style="max-width: 300px; margin: 0 auto;">
	{#each Constants.variants as variant (variant)}
		<PasswordInput label={variant} {variant} />
		<br />
		<br />
	{/each}
</div>

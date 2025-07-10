<script lang="ts">
	import { PasswordInput } from "@dxdns/feflow-svelte"

	const variants = ["contained", "text", "outlined"]
</script>

<div style="max-width: 300px; margin: 0 auto;">
	{#each variants as variant}
		<PasswordInput label={variant} variant={variant as any} />
		<br />
		<br />
	{/each}
</div>

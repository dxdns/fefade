<script lang="ts">
	import { Constants } from "@feflow-ui/core"
	import { PasswordInput } from "@feflow-ui/svelte"
</script>

<div style="max-width: 300px; margin: 0 auto;">
	{#each Constants.variants as variant (variant)}
		<PasswordInput label={variant} {variant} />
		<br />
		<br />
	{/each}
</div>

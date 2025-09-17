<script lang="ts">
	import { Constants } from "@fefade/core"
	import { PasswordInput } from "@fefade/svelte"
</script>

<div style="max-width: 300px; margin: 0 auto;">
	{#each Constants.variants as variant (variant)}
		<PasswordInput label={variant} {variant} />
		<br />
		<br />
	{/each}
</div>

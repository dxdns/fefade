<script lang="ts">
	import { Constants } from "@fefade/core"
	import { TextField } from "@fefade/svelte"
</script>

<div style="max-width: 300px; margin: 0 auto;">
	{#each Constants.variants as variant, i (i)}
		{@const size = Constants.sizes[i + 1]}
		<TextField label={`${variant} (${size})`} {variant} {size} />
		<br />
		<br />
	{/each}
</div>

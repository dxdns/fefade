<script lang="ts">
	import { Constants } from "@fefade/core"
	import { Button } from "@fefade/svelte"
</script>

<div style="display:flex; align-items: baseline; gap: 1rem; flex-wrap: wrap;">
	{#each Constants.sizes as size (size)}
		<Button {size}>{size}</Button>
	{/each}
</div>

<script lang="ts">
	import { Constants } from "@fefade/core"
	import { Button } from "@fefade/svelte"
</script>

<div
	style="
    display: flex; 
    flex-wrap: wrap;
    gap: 1rem;
	"
>
	{#each Constants.variants as variant (variant)}
		<Button {variant}>{variant}</Button>
	{/each}
</div>

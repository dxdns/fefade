<script lang="ts">
	import { Constants } from "@feflow-ui/core"
	import { RadioButton } from "@feflow-ui/svelte"
</script>

{#each Constants.sizes as size, i (size)}
	<RadioButton checked={Boolean(i % 2)} {size} />
{/each}

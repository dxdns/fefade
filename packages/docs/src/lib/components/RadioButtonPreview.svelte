<script lang="ts">
	import { Constants } from "@navnex-kit/core"
	import { RadioButton } from "@navnex-kit/svelte"
</script>

{#each Constants.sizes as size, i (size)}
	<RadioButton checked={Boolean(i % 2)} {size} />
{/each}

<script lang="ts">
	import { Constants } from "@fefade/core"
	import { RadioButton } from "@fefade/svelte"
</script>

{#each Constants.sizes as size, i (size)}
	<RadioButton label={size} checked={Boolean(i % 2)} {size} />
{/each}

{#each Constants.statusColors as color (color)}
	<RadioButton label={color} name="test" {color} />
{/each}

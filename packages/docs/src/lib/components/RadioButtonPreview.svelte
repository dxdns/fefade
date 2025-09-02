<script lang="ts">
	import { Constants } from "@dxdns-kit/core"
	import { RadioButton } from "@dxdns-kit/svelte"
</script>

{#each Constants.sizes as size, i (size)}
	<RadioButton label={size} checked={Boolean(i % 2)} {size} />
{/each}

{#each Constants.statusColors as color (color)}
	<RadioButton label={color} name="test" {color} />
{/each}

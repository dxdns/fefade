<script lang="ts">
	import { Checkbox } from "@/index.js"
	import { Constants } from "@fefade/core"

	const colors = [...Constants.statusColors, "secondary"] as const
</script>

<Checkbox label="checked" checked />
<Checkbox label="disabled" disabled />
<br />
{#each colors as color (color)}
	<Checkbox label={color} {color} />
{/each}

<script lang="ts">
	import { Constants } from "@navnex-kit/core"
	import { Badge, Select } from "@navnex-kit/svelte"

	let currentOption = $state("v2")
</script>

<Badge size="lg">
	<span>{currentOption}</span>
</Badge>

<br />
<br />

<Select
	onchange={(e) => {
		currentOption = e.currentTarget.value
	}}
	value={currentOption}
>
	<option value="v1">v1 test</option>
	<option value="v2">v2 test</option>
	<option value="v3">v3 test</option>
</Select>

{#each Constants.variants as variant (variant)}
	<Select {variant}>
		<option>{variant}</option>
	</Select>
	<br />
{/each}

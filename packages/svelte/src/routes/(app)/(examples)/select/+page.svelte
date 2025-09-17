<script lang="ts">
	import { Constants } from "@fefade/core"
	import { Badge, Select } from "@/index.js"

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

<br />
<br />

{#each Constants.variants as variant (variant)}
	<Select {variant}>
		<option>{variant}</option>
	</Select>
	<br />
{/each}

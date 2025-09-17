<script lang="ts">
	import { Badge, RangeInput } from "@/index.js"
	import { Constants } from "@fefade/core"

	const homeIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="red"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>`

	let rangeInputValue = $state(0)
</script>

<div style="display:flex; align-items: center; gap: 1rem;">
	<span>bindable</span>
	<RangeInput bind:value={rangeInputValue} step="10" />
	<Badge roundedFull size="lg">
		<span>{rangeInputValue}</span>
	</Badge>
</div>
<br />
<br />
<RangeInput bind:value={rangeInputValue} step="10" />
<br />
<br />
<RangeInput step="50" />
<br />
<br />
<RangeInput icon={homeIcon} />
<br />
<br />
<h2>sizes</h2>
{#each Constants.sizes as size (size)}
	<RangeInput {size} />
	<br />
	<br />
{/each}

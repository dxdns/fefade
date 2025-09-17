<script lang="ts">
	import { Constants } from "@fefade/core"
	import { Badge, RangeInput } from "@fefade/svelte"

	const homeIcon = `
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="red">
	<path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/>
	</svg>
	`

	let inputValue = $state(0)
</script>

<div
	style="
	max-width: 300px; 
	margin: 0 auto; 
	display: flex; 
	flex-direction: column; 
	gap: 1rem;
	"
>
	<RangeInput />
	<RangeInput icon={homeIcon} />

	<div style="display:flex; align-items: center; gap: 1rem;">
		<span>bindable</span>
		<RangeInput bind:value={inputValue} step="10" />
		<Badge roundedFull size="lg">
			<span>{inputValue}</span>
		</Badge>
	</div>

	<RangeInput bind:value={inputValue} step="10" />

	{#each Constants.sizes as size (size)}
		<RangeInput {size} />
	{/each}

	{#each Constants.statusColors as color (color)}
		<RangeInput {color} />
	{/each}
</div>

<script lang="ts">
	import { Constants } from "@dxdns-kit/core"
	import { Badge, RangeInput } from "@dxdns-kit/svelte"

	const homeIcon = `
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="red">
	<path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/>
	</svg>
	`

	let inputValue = $state(0)
</script>

<div style="max-width: 300px; line-height: 3; margin: 0 auto;">
	<RangeInput />
	<RangeInput icon={homeIcon} />

	<div style="display:flex; align-items: center; gap: 1rem;">
		<span>bindable</span>
		<RangeInput bind:value={inputValue} step="10" />
		<Badge roundedFull size="lg">
			<span>{inputValue}</span>
		</Badge>
	</div>

	<RangeInput bind:value={inputValue} />

	{#each Constants.sizes as size (size)}
		<RangeInput {size} />
		<br />
	{/each}
</div>

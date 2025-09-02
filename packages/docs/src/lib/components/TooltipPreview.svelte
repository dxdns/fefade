<script lang="ts">
	import { Constants } from "@dxdns-kit/core"
	import { Tooltip } from "@dxdns-kit/svelte"
</script>

<div
	style="
	max-width: 300px; 
	margin: 5rem auto; 
	display: flex; 
	flex-direction: column;
	gap: 1rem;
	"
>
	{#each Constants.positions as position (position)}
		<Tooltip label={position} {position}>
			<p>{position}</p>
		</Tooltip>
	{/each}
</div>

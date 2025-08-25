<script lang="ts">
	import { Constants } from "@feflow-ui/core"
	import { Tooltip } from "@feflow-ui/svelte"
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

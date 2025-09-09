<script lang="ts">
	import { Tooltip } from "@dxdns-kit/svelte"

	const positions = ["top", "bottom", "left", "right"] as const
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
	{#each positions as position (position)}
		<Tooltip label={position} {position}>
			<p>{position}</p>
		</Tooltip>
	{/each}
</div>

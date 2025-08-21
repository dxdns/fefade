<script lang="ts">
	import { Tooltip } from "@/index.js"

	const positions = ["top", "left", "right", "bottom"] as const
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

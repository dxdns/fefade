<script lang="ts">
	import { Alert } from "@fefade/svelte"
	import { Constants } from "@fefade/core"
</script>

<br />

{#each Constants.statusColors as color (color)}
	<Alert {color}>
		<div style="display: flex; flex-direction: column;">
			<strong>{color}</strong>
			<small>description</small>
		</div>
	</Alert>
	<br />
{/each}

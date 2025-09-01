<script lang="ts">
	import { Alert } from "@feflow-ui/svelte"
	import { Constants } from "@feflow-ui/core"
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

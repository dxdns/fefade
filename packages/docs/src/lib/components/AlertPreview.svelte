<script lang="ts">
	import { Alert } from "@navnex-kit/svelte"
	import { Constants } from "@navnex-kit/core"
</script>

<br />

{#each Constants.statusColors as color (color)}
	<Alert {color}>
		<div style="display: flex; flex-direction: column;">
			<strong>{color}</strong>
			<small class="muted">description</small>
		</div>
	</Alert>
	<br />
{/each}

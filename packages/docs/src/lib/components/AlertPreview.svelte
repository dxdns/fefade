<script lang="ts">
	import { Alert } from "@dxdns-kit/svelte"
	import { Constants } from "@dxdns-kit/core"
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

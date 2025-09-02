<script lang="ts">
	import { Alert } from "@/index.js"
	import { Constants } from "@dxdns-kit/core"
</script>

<br />

{#each Constants.statusColors as color (color)}
	<Alert {color}>
		<p>test</p>
	</Alert>
	<br />
{/each}

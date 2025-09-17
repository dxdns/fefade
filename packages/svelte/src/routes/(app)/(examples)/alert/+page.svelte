<script lang="ts">
	import { Alert } from "@/index.js"
	import { Constants } from "@fefade/core"
</script>

<br />

{#each Constants.statusColors as color (color)}
	<Alert {color}>
		<p>test</p>
	</Alert>
	<br />
{/each}

<script lang="ts">
	import { Constants } from "@feflow-ui/core"
	import { Kbd } from "@feflow-ui/svelte"
</script>

{#each Constants.sizes as size (size)}
	<div>
		<Kbd {size}>Ctrl</Kbd>
		<Kbd {size}>K</Kbd>
	</div>
	<br />
	<br />
{/each}

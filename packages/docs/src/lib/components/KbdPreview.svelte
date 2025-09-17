<script lang="ts">
	import { Constants } from "@fefade/core"
	import { Kbd } from "@fefade/svelte"
</script>

{#each Constants.sizes as size (size)}
	<div>
		<Kbd {size}>Ctrl</Kbd>
		<Kbd {size}>K</Kbd>
	</div>
	<br />
	<br />
{/each}

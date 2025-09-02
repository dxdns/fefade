<script lang="ts">
	import { Constants } from "@dxdns-kit/core"
	import { Kbd } from "@dxdns-kit/svelte"
</script>

{#each Constants.sizes as size (size)}
	<div>
		<Kbd {size}>Ctrl</Kbd>
		<Kbd {size}>K</Kbd>
	</div>
	<br />
	<br />
{/each}

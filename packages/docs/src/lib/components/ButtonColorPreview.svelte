<script lang="ts">
	import { Constants } from "@fefade/core"
	import { Button } from "@fefade/svelte"
</script>

<div style="display:flex; align-items: baseline; gap: 1rem; flex-wrap: wrap;">
	{#each Constants.statusColors as color (color)}
		<Button class="bg-{color} text-on-{color}">
			{color}
		</Button>
	{/each}
	<Button style="background: aqua;">aqua</Button>
</div>

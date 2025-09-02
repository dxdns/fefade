<script lang="ts">
	import { VisibilityListener } from "@dxdns-kit/svelte"

	let isVisible = $state(false)
	const n = 50
</script>

<h2>{n} is visibile: <span style="color: aqua;">{isVisible}</span></h2>
<div style="height: 200px; overflow-y: auto; border: 1px solid #ccc;">
	{#each Array(100) as _, i (i)}
		{#if i === n}
			<VisibilityListener
				callback={(value) => {
					isVisible = value
				}}
			>
				<p style="color: aqua;">{i} visible</p>
			</VisibilityListener>
		{:else}
			<p>{i}</p>
		{/if}
	{/each}
</div>

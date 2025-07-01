<script lang="ts">
	import { VisibilityListener } from "@/lib/index.js"
</script>

<div style="height: 200px; overflow-y: auto; border: 1px solid #ccc;">
	{#each Array(100) as _, i}
		<p>{i + 1}</p>
		{#if i === 50}
			<VisibilityListener
				callback={() => {
					console.log("50 visible")
				}}
			>
				<p style="color: red;">50 visible</p>
			</VisibilityListener>
		{/if}
	{/each}
</div>

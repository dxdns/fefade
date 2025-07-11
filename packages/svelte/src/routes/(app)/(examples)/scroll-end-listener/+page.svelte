<script lang="ts">
	import { ScrollEndListener } from "@/index.js"

	function onScrollToEnd() {
		console.log("end")
	}
</script>

<ScrollEndListener callback={onScrollToEnd}>
	<div style="height: 200px; overflow-y: auto; border: 1px solid #ccc;">
		{#each Array(100) as _, i}
			<p>{i + 1}</p>
		{/each}
	</div>
</ScrollEndListener>

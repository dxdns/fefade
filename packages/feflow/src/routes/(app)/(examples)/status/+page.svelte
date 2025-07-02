<script lang="ts">
	import { Status } from "@/lib/index.js"
</script>

<div style="width: 500px; margin: 3rem auto;">
	<h1>pulse</h1>
	<br />
	<Status variant="pulse" color="blue" />
	<br />
	<br />
	<h1>ping</h1>
	<br />
	<Status variant="ping" color="red" />

	<br />
	<br />
	<h1>bounce</h1>
	<br />
	<Status variant="bounce" color="green" />

	<br />
	<br />
	<h1>sizes</h1>
	<br />
	{#each ["5rem", 100, "150px", 200] as size, i}
		<Status
			color={i % 2 ? "aqua" : undefined}
			variant={i % 2 ? "bounce" : "none"}
			{size}
		/>
	{/each}
</div>

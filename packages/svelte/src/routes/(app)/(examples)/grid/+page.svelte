<script lang="ts">
	import { Grid } from "@/index.js"

	const items = [
		{ color: "#FF6B6B", height: "100px" },
		{ color: "#6BCB77", height: "150px" },
		{ color: "#4D96FF", height: "120px" },
		{ color: "#FFD93D", height: "80px" },
		{ color: "#845EC2", height: "130px" },
		{ color: "#00C9A7", height: "110px" }
	]
</script>

<Grid style="align-items: center; margin-top: 3rem;" maxWidth="80px" gap="5rem">
	{#each items as item (item.color)}
		<div
			style="
				background-color: {item.color};
				height: {item.height};
				border-radius: 8px;
				display: flex;
				align-items: center;
				justify-content: center;
				color: white;
				font-weight: bold;
			"
		>
			{item.height}
		</div>
	{/each}
</Grid>

<script lang="ts">
	import { Badge, Button, Card, Grid, themeConfig } from "@fefade/svelte"

	const theme = $derived(themeConfig())
</script>

<div
	style="
    display: flex; 
    flex-wrap: wrap; 
    gap: 1rem; 
    align-items: center;
	justify-content: flex-end;
    "
>
	<Badge variant="outlined">
		<h4>{theme.mode}</h4>
	</Badge>
	<Button variant="outlined" onclick={theme.toggle}>toggle theme</Button>
</div>

<Grid style="grid-auto-rows: 60px;">
	{#each Object.entries(theme.colors) as [k, v] (k)}
		<Card
			style="
			background: {v}; 
			margin: 0;
			"
		>
			<Badge
				style="
				position: absolute;
				top: 0;
				right: 0;
				margin: 0;
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;
				"
			>
				{k}
			</Badge>
			<Badge size="lg">{v}</Badge>
		</Card>
	{/each}
</Grid>

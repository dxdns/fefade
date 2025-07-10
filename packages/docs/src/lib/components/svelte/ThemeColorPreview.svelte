<script lang="ts">
	import { Badge, Button, Card, themeConfig } from "@feflow/svelte"

	const theme = $derived(themeConfig())
</script>

<div
	style="
    display: flex; 
    flex-wrap: wrap; 
    gap: 1rem; 
    align-items: center;
    "
>
	<h2>{theme.mode}</h2>
	<Button variant="outlined" onclick={theme.toggle}>toggle theme</Button>
</div>
<Card style="background: {theme.mode === 'dark' ? 'green' : 'red'};">
	<ul style="line-height: 2;">
		{#each Object.keys(theme.colors) as t}
			{@const color = theme.colors[t as keyof typeof theme.colors]}
			<li>
				<span style="color:aqua;">{t}</span>:
				<Badge roundedFull style="background: {color};" size="sm"></Badge>
			</li>
		{/each}
	</ul>
</Card>

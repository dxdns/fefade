<script lang="ts">
	import { Badge, Button, Card, themeConfig } from "@/index.js"

	const theme = $derived(themeConfig())
</script>

<div style="width: 500px; margin: 3rem auto;">
	<p class="text-on-error">
		for the theme to work you must place the <strong>theme provider</strong> component
		under the layout
	</p>
	<br />
	<h2>{theme.mode}</h2>
	<br />

	<Card style="background: {theme.mode === 'dark' ? 'green' : 'red'};">
		<ul style="line-height: 2;">
			{#each Object.keys(theme.colors) as t (t)}
				{@const color = theme.colors[t as keyof typeof theme.colors]}
				<li>
					<span style="color:aqua;">{t}</span>:
					<Badge roundedFull style="background: {color};" size="sm"></Badge>
				</li>
			{/each}
		</ul>
	</Card>
	<br />
	<Button variant="outlined" onclick={theme.toggle}>toggle theme</Button>
</div>

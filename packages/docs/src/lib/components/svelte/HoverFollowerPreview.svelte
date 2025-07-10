<script lang="ts">
	import { Card, HoverFollower } from "@feflow/svelte"
</script>

<HoverFollower>
	<Card>
		<div>
			<h4>test</h4>
			<p>test</p>
		</div>
	</Card>
	<Card>
		<div>
			<h4>test</h4>
			<p>test</p>
		</div>
	</Card>
</HoverFollower>

<HoverFollower
	style="gap: 1rem; flex-wrap: wrap;"
	orientation="horizontal"
	bgColor="green"
>
	{#each Array.from(Array(5)) as _, i}
		<Card variant={i % 2 ? "contained" : "outlined"}>
			<div>
				<h4>test {i}</h4>
				<p>test {i}</p>
			</div>
		</Card>
	{/each}
</HoverFollower>

<script lang="ts">
	import { Card, HoverFollower } from "@/lib/index.js"
</script>

<Card>
	<h2>test1</h2>
</Card>

<Card glowOnHover>
	<h2>glow on hover</h2>
</Card>

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

<HoverFollower style="display: flex; gap: 3rem;" orientation="horizontal">
	{#each Array.from(Array(5)) as _, i}
		<Card>
			<div>
				<h4>test {i}</h4>
				<p>test {i}</p>
			</div>
		</Card>
	{/each}
</HoverFollower>

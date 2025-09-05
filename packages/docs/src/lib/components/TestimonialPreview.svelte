<script lang="ts">
	import { Avatar, Card, Rating } from "@dxdns-kit/svelte"
</script>

<Card variant="contained">
	<div style="display: flex; gap: 1rem; align-items: center;">
		<Avatar textFallback="Chloe K." />
		<p style="margin: 0;">
			<strong>Chloe K.</strong>
			<br />
			<span class="muted">Marketing Lead</span>
		</p>
	</div>

	<Rating startIn={3.5} style="font-size: 24px;" />

	<p>
		<i
			>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
			deserunt ullam, architecto libero quo accusamus? Facere deserunt natus
			quibusdam libero expedita magni a! Necessitatibus dicta odio quo qui esse
			porro?</i
		>
	</p>
</Card>

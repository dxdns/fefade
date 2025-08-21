<script lang="ts">
	import { Button, Card, HoverReveal } from "@/index.js"
</script>

<div style="max-width: 300px; margin: 0 auto;">
	<HoverReveal href="https://github.com/dxdns" target="_blank">
		<Card>
			<h1>test</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ab
				est ipsa corporis fuga libero temporibus inventore exercitationem
				pariatur. Soluta minima suscipit perferendis enim cumque atque iusto
				obcaecati maiores consectetur!
			</p>
		</Card>

		{#snippet reveal()}
			<Button>reveal</Button>
		{/snippet}
	</HoverReveal>
</div>

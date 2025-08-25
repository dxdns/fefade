<script lang="ts">
	import { Phone } from "@feflow-ui/svelte"
</script>

<Phone>
	{#snippet notch()}
		<Phone.Notch />
	{/snippet}
	<div style="display: flex; justify-content: center; padding: 6rem 0;">
		<h1>test</h1>
	</div>
</Phone>

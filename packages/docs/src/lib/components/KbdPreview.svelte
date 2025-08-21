<script lang="ts">
	import { Kbd } from "@feflow-ui/svelte"

	const sizes = ["xs", "sm", "md", "lg", "xl"]
</script>

{#each sizes as size (size)}
	<div>
		<Kbd size={size as any}>Ctrl</Kbd>
		<Kbd size={size as any}>K</Kbd>
	</div>
	<br />
	<br />
{/each}

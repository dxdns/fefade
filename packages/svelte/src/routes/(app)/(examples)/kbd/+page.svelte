<script lang="ts">
	import { Kbd } from "@/index.js"
</script>

{#each ["xs", "sm", "md", "lg", "xl"] as size (size)}
	<div>
		<Kbd size={size as any}>Ctrl</Kbd>
		<Kbd size={size as any}>K</Kbd>
	</div>
	<br />
	<br />
{/each}

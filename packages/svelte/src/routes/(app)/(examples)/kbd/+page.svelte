<script lang="ts">
	import { Kbd, type SizeType } from "@/index.js"
</script>

{#each ["xs", "sm", "md", "lg", "xl"] as size (size)}
	<div>
		<Kbd size={size as SizeType}>Ctrl</Kbd>
		<Kbd size={size as SizeType}>K</Kbd>
	</div>
	<br />
	<br />
{/each}

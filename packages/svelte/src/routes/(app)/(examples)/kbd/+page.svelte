<script lang="ts">
	import { Kbd } from "@/index.js"

	const sizes = ["xs", "sm", "md", "lg", "xl"] as const
</script>

{#each sizes as size (size)}
	<div>
		<Kbd {size}>Ctrl</Kbd>
		<Kbd {size}>K</Kbd>
	</div>
	<br />
	<br />
{/each}

<script lang="ts">
	import { FeflowProvider } from "@/lib/index.js"

	let { children } = $props()
</script>

<FeflowProvider>
	{@render children()}
</FeflowProvider>

<!-- <style>
	:global(*) {
		margin: 0;
		padding: 0;
		outline: 0;
		appearance: none;
		border: none;
		text-decoration: none;
		list-style: none;
		box-sizing: border-box;
		scroll-behavior: smooth;
	}
</style> -->

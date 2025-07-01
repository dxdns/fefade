<script lang="ts">
	import { FeflowProvider } from "@dxdns/feflow"

	let { children } = $props()
</script>

<FeflowProvider>
	{@render children()}
</FeflowProvider>

<script lang="ts">
	import { RadioButton } from "@dxdns/feflow"

	const sizes = ["xs", "sm", "md", "lg", "xl"]
</script>

{#each sizes as size, i}
	<RadioButton checked={Boolean(i % 2)} size={size as any} />
{/each}

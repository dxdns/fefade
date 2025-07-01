<script lang="ts">
	import { TextField } from "@dxdns/feflow"

	const sizes = ["xs", "sm", "md", "lg", "xl"]
	const variants = ["contained", "text", "outlined"]
</script>

<div style="max-width: 300px; margin: 0 auto;">
	{#each variants as variant}
		<TextField label={variant} variant={variant as any} />
		<br />
		<br />
	{/each}

	{#each sizes as size, i}
		<TextField
			label={size}
			variant={i % 2 ? "contained" : "text"}
			size={size as any}
		/>
		<br />
		<br />
	{/each}
</div>

<script lang="ts">
	import { TextField } from "@feflow-ui/svelte"

	const sizes = ["xs", "sm", "md", "lg", "xl"]
	const variants = ["contained", "text", "outlined"]
</script>

<div style="max-width: 300px; margin: 0 auto;">
	{#each variants as variant, i (i)}
		{@const size = sizes[i + 1] as any}
		<TextField label={`${variant} (${size})`} variant={variant as any} {size} />
		<br />
		<br />
	{/each}
</div>

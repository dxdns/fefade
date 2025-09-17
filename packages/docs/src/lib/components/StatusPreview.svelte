<script lang="ts">
	import { Constants } from "@fefade/core"
	import { Status, themeConfig } from "@fefade/svelte"

	const { colors } = $derived(themeConfig())
</script>

<div style="max-width: 300px; margin: 0 auto; line-height: 3;">
	{#each Constants.statusVariants as variant, i (variant)}
		<Status {variant} color={i % 2 ? colors.success : colors.error} />
		<br />
	{/each}

	{#each ["5rem", 100, "150px", 200] as size, i (i)}
		<Status
			color={i % 2 ? colors.info : colors.warning}
			variant={i % 2 ? "bounce" : "none"}
			{size}
		/>
		<br />
	{/each}
</div>

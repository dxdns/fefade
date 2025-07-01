<script lang="ts">
	import { Status, themeConfig } from "@dxdns/feflow"

	const { colors } = $derived(themeConfig())
	const variants = ["pulse", "ping", "bounce"]
</script>

<div style="max-width: 300px; margin: 0 auto; line-height: 3;">
	{#each variants as variant, i}
		<Status
			variant={variant as any}
			color={i % 2 ? colors.success : colors.error}
		/>
		<br />
	{/each}

	{#each ["5rem", 100, "150px", 200] as size, i}
		<Status
			color={i % 2 ? colors.info : colors.warning}
			variant={i % 2 ? "bounce" : "none"}
			{size}
		/>
		<br />
	{/each}
</div>

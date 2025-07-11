<script lang="ts">
	import { DateInput, themeConfig } from "@dxdns/feflow-svelte"

	const theme = $derived(themeConfig())
</script>

<DateInput {theme} />
<br />
<br />
<DateInput {theme} type="month" />

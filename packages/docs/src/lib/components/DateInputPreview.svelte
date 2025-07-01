<script lang="ts">
	import { DateInput, themeConfig } from "@dxdns/feflow"

	const theme = $derived(themeConfig())
</script>

<DateInput {theme} />
<br />
<br />
<DateInput {theme} type="month" />

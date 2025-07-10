<script lang="ts">
	import { DateInput, themeConfig } from "@lib/index.js"

	const theme = $derived(themeConfig())
</script>

<br />
<DateInput {theme} />

<br />
<br />
<DateInput {theme} type="month" />

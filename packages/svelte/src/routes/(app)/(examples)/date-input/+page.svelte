<script lang="ts">
	import { DateInput, themeConfig } from "@/index.js"

	const theme = $derived(themeConfig())
</script>

<br />
<DateInput {theme} />

<br />
<br />
<DateInput {theme} type="month" />

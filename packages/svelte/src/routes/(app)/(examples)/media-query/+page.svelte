<script lang="ts">
	import { useMediaQuery } from "@lib/index.js"
	import { onDestroy } from "svelte"

	const isSm = useMediaQuery("max-width", "sm")
	const isMd = useMediaQuery("max-width", "md")
	const isCustom = useMediaQuery("max-width", "850px")

	onDestroy(() => {
		isSm.destroy()
		isMd.destroy()
		isCustom.destroy()
	})
</script>

<h1>isSm: {isSm.value}</h1>
<h1>isMd: {isMd.value}</h1>
<h1>isCustom: {isCustom.value}</h1>

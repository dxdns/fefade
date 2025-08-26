<script lang="ts">
	import { useMediaQuery } from "@navnex-kit/svelte"
	import { onDestroy } from "svelte"

	const isSm = $derived(useMediaQuery("max-width", "sm"))
	const isMd = $derived(useMediaQuery("max-width", "md"))
	const isCustom = $derived(useMediaQuery("max-width", "800px"))

	onDestroy(() => {
		isSm.destroy()
		isMd.destroy()
		isCustom.destroy()
	})
</script>

<h4>isSm: {isSm.value}</h4>
<h4>isMd: {isMd.value}</h4>
<h4>isCustom: {isCustom.value}</h4>

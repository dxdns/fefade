<script lang="ts">
	import { useMediaQuery } from "@feflow-ui/svelte"

	const isSm = useMediaQuery("max-width", "sm")
	const isMd = useMediaQuery("max-width", "md")
	const isCustom = useMediaQuery("max-width", "800px")
</script>

<h4>sm (425px): {isSm.value}</h4>
<h4>md (768px): {isMd.value}</h4>
<h4>custom (800px): {isCustom.value}</h4>

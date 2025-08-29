<script lang="ts">
	import { useMediaQuery } from "@/index.js"

	const isSm = useMediaQuery("max-width", "sm")
	const isMd = useMediaQuery("max-width", "md")
	const isCustom = useMediaQuery("max-width", "800px")
</script>

<h4>isSm: {isSm.value}</h4>
<h4>isMd: {isMd.value}</h4>
<h4>isCustom: {isCustom.value}</h4>

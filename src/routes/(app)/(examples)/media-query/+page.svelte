<script lang="ts">
	import { useMediaQuery } from "@/lib/index.js"
	import { onDestroy } from "svelte"

	const bp = useMediaQuery("(max-width: 768px)")

	onDestroy(() => {
		bp.destroy()
	})
</script>

<h1>{bp.value}</h1>

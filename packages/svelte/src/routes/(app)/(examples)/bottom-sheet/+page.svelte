<script lang="ts">
	import { BottomSheet, Button } from "@/index.js"

	let isOpen = $state(false)

	const handleOpen = () => {
		isOpen = !isOpen
	}

	const handleClose = () => {
		isOpen = false
	}
</script>

<BottomSheet.Overlay {isOpen} onclick={handleClose} style="z-index: 998;" />
<BottomSheet
	{isOpen}
	{handleClose}
	style="min-height: 0; height: 30vh; max-height: 70vh;"
>
	<div style="padding: 1rem;">
		<h1>test</h1>
	</div>
</BottomSheet>

<Button onclick={handleOpen}>Open BottomSheet</Button>

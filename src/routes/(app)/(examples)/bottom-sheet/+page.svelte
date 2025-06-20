<script lang="ts">
	import { BottomSheet, Button } from "@/lib/index.js"

	let isOpen = $state(false)

	const handleOpen = () => {
		isOpen = !isOpen
	}

	const handleClose = () => {
		isOpen = false
	}
</script>

<BottomSheet.Overlay {isOpen} onclick={handleClose} style="z-index: 998;" />
<BottomSheet {isOpen} {handleClose}>
	<h1>test</h1>
</BottomSheet>

<Button onclick={handleOpen}>Open BottomSheet</Button>

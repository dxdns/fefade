<script lang="ts">
	import { BottomSheet, Button } from "@/index.js"
	import { onMount } from "svelte"

	let isOpen = $state(false)

	const handleOpen = () => {
		isOpen = !isOpen
	}

	const handleClose = () => {
		isOpen = false
	}

	onMount(() => {
		handleOpen()
	})
</script>

<BottomSheet.Overlay {isOpen} onclick={handleClose} style="z-index: 998;" />
<BottomSheet {isOpen} {handleClose} style="min-height: 50vh; height: 100vh;">
	<BottomSheet.DragButton>drag button</BottomSheet.DragButton>
	<BottomSheet.Content>
		<h1>test</h1>
	</BottomSheet.Content>
</BottomSheet>

<Button onclick={handleOpen}>Open BottomSheet</Button>

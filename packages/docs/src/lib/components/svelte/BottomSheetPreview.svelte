<script lang="ts">
	import { BottomSheet, Button } from "@dxdns/feflow-svelte"

	let isOpen = $state(false)

	function handleClose() {
		isOpen = false
	}
</script>

<BottomSheet.Overlay {isOpen} onclick={handleClose} style="z-index: 998;" />
<BottomSheet {isOpen} {handleClose}>
	<h1>test</h1>
</BottomSheet>

<Button
	onclick={() => {
		isOpen = !isOpen
	}}
>
	Open
</Button>

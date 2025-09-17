<script lang="ts">
	import { Button, Modal } from "@fefade/svelte"
	import { onMount } from "svelte"

	let isOpen = $state(false)

	function handleClose() {
		isOpen = false
	}

	onMount(() => {
		isOpen = true
	})
</script>

<Modal {isOpen} {handleClose}>
	<Modal.Header {handleClose} align="center">
		<h2>test header</h2>
	</Modal.Header>
	<Modal.Content>
		<p>test content</p>
	</Modal.Content>
	<Modal.Actions class="border-0" align="center" style="align-items: baseline;">
		<Button variant="outlined" onclick={handleClose}>Cancel</Button>
		<Button>Save</Button>
	</Modal.Actions>
</Modal>

<Button
	onclick={() => {
		isOpen = !isOpen
	}}
>
	Open Modal
</Button>

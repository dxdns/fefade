<script lang="ts">
	import { Button, Modal } from "@lib/index.js"

	let openModal = $state(false)

	function handleClose() {
		openModal = false
	}
</script>

<Modal isOpen={openModal} {handleClose}>
	<Modal.Header {handleClose} align="center">
		<h2>test header</h2>
	</Modal.Header>
	<Modal.Content>
		<p>test content</p>
	</Modal.Content>
	<Modal.Actions class="border-0" align="center">
		<Button variant="outlined" onclick={handleClose}>Cancel</Button>
		<Button>Save</Button>
	</Modal.Actions>
</Modal>

<Button
	onclick={() => {
		openModal = !openModal
	}}
>
	Open Modal
</Button>

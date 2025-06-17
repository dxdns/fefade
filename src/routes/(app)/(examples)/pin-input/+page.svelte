<script lang="ts">
	import { Button, Modal, PinInput } from "@/lib/index.js"
</script>

<Modal isOpen={true} handleClose={() => {}}>
	<Modal.Header align="center">
		<h1>Two-Factor Verification</h1>
	</Modal.Header>
	<Modal.Content style="width: 50%; margin: 0 auto; text-align: center;">
		<p>
			Enter the two-factor authentication code provided by the authenticator app
		</p>
		<br />
		<div style="display: flex; align-items: center; justify-content: center;">
			<PinInput isLoading />
			<PinInput />
			<PinInput />
			<PinInput />
		</div>
	</Modal.Content>
	<Modal.Actions class="border-0" align="center">
		<Button
			class="hover-border-on-error hover-text-on-error"
			variant="outlined"
		>
			Cancel
		</Button>
		<Button>Save</Button>
	</Modal.Actions>
</Modal>

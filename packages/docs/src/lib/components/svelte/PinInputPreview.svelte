<script lang="ts">
	import { Button, Modal, PinInput } from "@dxdns/feflow-svelte"
	import { onMount } from "svelte"

	let isOpen = $state(false)
	let isLoading = $state(false)

	function handleOpen() {
		isOpen = !isOpen
	}

	function handleClose() {
		isOpen = false
	}

	onMount(() => {
		isOpen = true
	})
</script>

<Modal {isOpen} {handleClose}>
	<Modal.Header align="center">
		<h3>Two-Factor Verification</h3>
	</Modal.Header>
	<Modal.Content
		style="
        max-width: 500px; 
        margin: 0 auto; 
        text-align: center;
        "
	>
		<p>
			Enter the two-factor authentication code provided by the authenticator app
		</p>
		<br />
		<div
			style="
            display: flex; 
            align-items: center; 
            justify-content: center;
            overflow: hidden;
            flex-wrap: nowrap;
            gap: 0.5rem;
            "
		>
			{#each Array.from(Array(4)) as _, i}
				<PinInput autoFocus={i === 0} {isLoading} value="" />
			{/each}
		</div>
	</Modal.Content>
	<Modal.Actions class="border-0" align="center">
		<Button
			class="hover-border-on-error hover-text-on-error"
			variant="outlined"
			onclick={handleClose}
		>
			Cancel
		</Button>
		<Button
			{isLoading}
			disabled={isLoading}
			onclick={() => {
				isLoading = true
				setTimeout(() => {
					isLoading = false
					handleClose()
				}, 5000)
			}}
		>
			Save
		</Button>
	</Modal.Actions>
</Modal>

<Button onclick={handleOpen}>open</Button>

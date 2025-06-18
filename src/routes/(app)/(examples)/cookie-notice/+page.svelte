<script lang="ts">
	import { Button, Drawer } from "@/lib/index.js"
	import { onMount } from "svelte"

	let isOpen = $state(false)

	function handleOpen() {
		isOpen = true
	}

	function handleClose() {
		isOpen = false
	}

	onMount(() => {
		isOpen = true
	})
</script>

<Button onclick={handleOpen}>Open</Button>

<Drawer
	withOverlay={false}
	{isOpen}
	position="bottom"
	{handleClose}
	style="padding: 0;"
>
	{#snippet header()}
		<strong>🍪 We use cookies</strong>
	{/snippet}
	<p>
		We use cookies to enhance your experience. By continuing to visit this site
		you agree to our use of cookies.
	</p>
	<div style="display: flex; justify-content: flex-end; gap: 0.5rem;">
		<Button variant="outlined" onclick={handleClose}>Decline</Button>
		<Button>Accept</Button>
	</div>
</Drawer>

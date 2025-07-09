<script lang="ts">
	import { Button, Drawer } from "feflow-svelte"
	import { onMount } from "svelte"

	let isOpen = $state(false)

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

<Button onclick={handleOpen}>Open</Button>

<Drawer {isOpen} position="bottom" style="padding: 0;">
	<Drawer.Header style="justify-content: flex-start;">
		<strong>🍪 We use cookies</strong>
	</Drawer.Header>
	<Drawer.Content>
		<p>
			We use cookies to enhance your experience. By continuing to visit this
			site you agree to our use of cookies.
		</p>
		<div
			style="display: flex; justify-content: flex-end; gap: 0.5rem; align-items: baseline;"
		>
			<Button variant="outlined" onclick={handleClose}>Decline</Button>
			<Button>Accept</Button>
		</div>
	</Drawer.Content>
</Drawer>

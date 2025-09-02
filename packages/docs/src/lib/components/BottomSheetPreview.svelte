<script lang="ts">
	import { BottomSheet, Button } from "@dxdns-kit/svelte"
	import { onMount } from "svelte"

	let isOpen = $state(false)
	let variant = $state("")

	function handleOpen(s: string) {
		variant = s
		isOpen = !isOpen
	}

	function handleClose() {
		isOpen = false
	}

	onMount(() => {
		handleOpen("text")
	})
</script>

<BottomSheet.Overlay {isOpen} onclick={handleClose} style="z-index: 998;" />
<BottomSheet {isOpen} {handleClose}>
	<BottomSheet.DragButton variant={variant as any} />
	<BottomSheet.Content>
		<h1>test</h1>
	</BottomSheet.Content>
</BottomSheet>

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
	{#each ["text", "contained", "outlined"] as variant (variant)}
		<Button
			onclick={() => {
				handleOpen(variant)
			}}
		>
			{variant}
		</Button>
	{/each}
</div>

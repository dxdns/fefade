<script lang="ts">
	import { Button, toast, Toaster } from "@dxdns/feflow-svelte"

	const colors = ["error", "success", "warning"]
	const positions = [
		"top-left",
		"bottom-left",
		"top-right",
		"bottom-right",
		"bottom-center",
		"top-center"
	]
</script>

<Toaster />

<div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
	{#each colors as color}
		<Button
			onclick={() => {
				toast({ message: color, color: color as any })
			}}
		>
			{color}
		</Button>
	{/each}

	{#each positions as position}
		<Button
			onclick={() => {
				toast({ message: position, position: position as any })
			}}
		>
			{position}
		</Button>
	{/each}

	<Button
		onclick={() => {
			toast({ message: "Duration: 15000", duration: 15000 })
		}}
	>
		Duration: 15000
	</Button>

	<Button
		onclick={() => {
			toast({ message: "closable", isClosable: true })
		}}
	>
		Closable
	</Button>
</div>

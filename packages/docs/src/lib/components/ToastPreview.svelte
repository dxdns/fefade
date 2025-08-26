<script lang="ts">
	import { Constants } from "@navnex-kit/core"
	import { Button, toast, Toaster } from "@navnex-kit/svelte"

	const positions = [
		"top-left",
		"bottom-left",
		"top-right",
		"bottom-right",
		"bottom-center",
		"top-center"
	] as const
</script>

<Toaster />

<div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
	{#each Constants.statusColors as color (color)}
		<Button
			onclick={() => {
				toast({
					message: color,
					color
				})
			}}
		>
			{color}
		</Button>
	{/each}

	{#each positions as position (position)}
		<Button
			onclick={() => {
				toast({
					message: position,
					position
				})
			}}
		>
			{position}
		</Button>
	{/each}

	<Button
		onclick={() => {
			toast({
				message: "Duration: 15000",
				duration: 15000
			})
		}}
	>
		Duration: 15000
	</Button>

	<Button
		onclick={() => {
			toast({
				message: "closable",
				isClosable: true
			})
		}}
	>
		Closable
	</Button>
</div>

<script lang="ts">
	import { Button, toast } from "@/index.js"

	const colors = ["error", "success", "warning"] as const
	const positions = [
		"top-left",
		"bottom-left",
		"top-right",
		"bottom-right",
		"bottom-center",
		"top-center"
	] as const
</script>

<div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
	{#each colors as color (color)}
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
				message: "Duration: 50000",
				duration: 50000,
				isClosable: true
			})
		}}
	>
		Duration: 50000
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

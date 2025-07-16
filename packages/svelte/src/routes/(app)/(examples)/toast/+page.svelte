<script lang="ts">
	import {
		Button,
		toast,
		type StatusColorType,
		type PositionType
	} from "@/index.js"

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

<div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
	{#each colors as color (color)}
		<Button
			onclick={() => {
				toast({
					message: color,
					color: color as StatusColorType
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
					position: position as PositionType
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

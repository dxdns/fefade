<script lang="ts">
	import { Constants } from "@dxdns-kit/core"
	import { Button, toast } from "@dxdns-kit/svelte"

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
	{#each Constants.statusColors as color (color)}
		<Button
			onclick={() => {
				toast({
					message: color,
					color
				})
			}}
			class={`bg-${color} text-on-${color}`}
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
				duration: 50000
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

	<Button
		onclick={() => {
			toast({
				message: "with progress loader",
				withProgressLoader: true,
				duration: 15000
			})
		}}
	>
		With Progress Loader
	</Button>
</div>

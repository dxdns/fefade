<script lang="ts">
	import { Button } from "@feflow-ui/svelte"
	import type { Snippet } from "svelte"

	interface Props {
		children: Snippet<[]>
	}

	let { children }: Props = $props()

	const resolutions = [
		{ label: "Mobile", width: 425 },
		{ label: "Tablet", width: 768 },
		{ label: "Desktop", width: 1280 }
	]

	let selected = $state(resolutions[2])
</script>

<div
	style="
	display: flex;
	align-items: center;
	gap: 1rem;
	"
>
	{#each resolutions as res (res)}
		<Button
			disabled={selected.label === res.label}
			onclick={() => (selected = res)}
		>
			{res.label}
		</Button>
	{/each}
</div>

<div
	style="
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	"
>
	<div
		style="
		width: {selected.width}px;
		transition: width 0.3s ease, height 0.3s ease;
		"
	>
		{@render children?.()}
	</div>
</div>

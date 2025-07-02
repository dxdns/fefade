<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import Card from "../card/index.js"
	import Badge from "../badge/index.js"
	import type { Snippet } from "svelte"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		label?: string | Snippet<[]>
	}

	let { class: className = "", label, children, ...rest }: Props = $props()
</script>

<Card {...rest} class={className}>
	<div class="header">
		<div class="actions">
			<Badge class="bg-error" roundedFull size="xs"></Badge>
			<Badge class="bg-warning" roundedFull size="xs"></Badge>
			<Badge class="bg-success" roundedFull size="xs"></Badge>
		</div>
		{#if typeof label === "string"}
			{label}
		{:else}
			{@render label?.()}
		{/if}
	</div>
	{@render children?.()}
</Card>

<style>
	.header {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 15px;
		height: 30px;
		user-select: none;
	}

	.actions {
		display: flex;
		gap: 5px;
		align-items: center;
	}
</style>

<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"

	interface Props extends Omit<HTMLInputAttributes, "type"> {}

	let { ...rest }: Props = $props()
</script>

<input defaultValue="#ffffff" type="color" {...rest} />

<style>
	input[type="color" i] {
		all: unset;
		appearance: none;
		width: 40px;
		height: 40px;
		border-radius: 0.25rem;
		border: 1px solid var(--ff-border);
		background: none;
		cursor: pointer;
		padding: 0;
	}

	input[type="color" i]::-webkit-color-swatch-wrapper {
		background: var(--ff-surface) !important;
	}
</style>

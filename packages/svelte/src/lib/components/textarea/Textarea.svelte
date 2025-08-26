<script lang="ts">
	import type { HTMLTextareaAttributes } from "svelte/elements"

	interface Props extends HTMLTextareaAttributes {}

	let {
		class: className = "",
		value = $bindable(""),
		...rest
	}: Props = $props()
</script>

<textarea {...rest} class={className} {value}></textarea>

<style>
	textarea {
		padding: 1rem;
		border-radius: 15px;
		color: var(--nn-on-surface);
		background: var(--nn-surface);
		border: 1px solid var(--nn-border);
		transition: border-color 0.3s ease;
	}

	textarea:focus {
		outline: none;
		border-color: color-mix(in srgb, var(--nn-border) 70%, gray);
	}
</style>

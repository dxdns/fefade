<script lang="ts">
	import type { HTMLTextareaAttributes } from "svelte/elements"

	interface Props extends HTMLTextareaAttributes {}

	let { class: className = "", ...rest }: Props = $props()
</script>

<textarea {...rest} class={className}></textarea>

<style>
	textarea {
		padding: 1rem;
		border-radius: 15px;
		color: var(--ff-on-surface);
		background: var(--ff-surface);
		border-color: var(--ff-border);
		transition: border-color 0.3s ease;
	}

	textarea:focus {
		outline: none;
		border-color: color-mix(in srgb, var(--ff-border) 70%, gray);
	}
</style>

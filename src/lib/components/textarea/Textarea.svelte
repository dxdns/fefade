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
		color: var(--ff-color-on-surface);
		background: var(--ff-color-surface);
	}

	textarea:focus {
		outline: none;
		border-color: var(--ff-color-border);
	}
</style>

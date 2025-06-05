<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"

	interface Props extends Omit<HTMLInputAttributes, "type"> {}

	let { class: className = "", children, ...rest }: Props = $props()
</script>

<input {...rest} class={className} type="range" />

<style>
	input {
		appearance: none;
		width: 100%;
		height: 4px;
		border-radius: 5px;
		background: var(--ff-color-surface);
		outline: none;
		opacity: 0.7;
	}

	input::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background: var(--ff-color-on-surface);
		cursor: pointer;
		transition: all 0.3s ease-in-out;
	}

	input::-webkit-slider-thumb:hover {
		box-shadow: 0px 0px 0px 8px rgba(0, 0, 0, 0.16);
	}
</style>

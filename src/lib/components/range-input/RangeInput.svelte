<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"

	interface Props extends Omit<Omit<HTMLInputAttributes, "value">, "type"> {
		value: number
	}

	let {
		class: className = "",
		value = $bindable(0),
		min = 0,
		max = 100,
		children,
		...rest
	}: Props = $props()

	let progressValue = $state(0)
</script>

<input
	{...rest}
	class={className}
	{value}
	{min}
	{max}
	type="range"
	style="--progress: {progressValue}%"
	oninput={(e) => {
		rest.oninput?.(e)

		const { value, min, max } = e.currentTarget

		const minNum = Number(min)
		const maxNum = Number(max)
		const valueNum = Number(value)

		if (
			isNaN(minNum) ||
			isNaN(maxNum) ||
			isNaN(valueNum) ||
			maxNum === minNum
		) {
			progressValue = 0
		} else {
			progressValue = ((valueNum - minNum) / (maxNum - minNum)) * 100
		}
	}}
/>

<style>
	:root {
		--rounded-full: 9999px;
	}

	input {
		appearance: textfield;
		-moz-appearance: textfield;
		-webkit-appearance: none;
		width: 100%;
		height: 4px;
		border-radius: 5px;
		background: var(--ff-color-surface);
		outline: none;
		opacity: 0.7;
		user-select: none;
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
		border: 2px solid var(--ff-color-border);
	}

	input::-moz-range-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background: var(--ff-color-on-surface);
		cursor: pointer;
		transition: all 0.3s ease-in-out;
		border: 2px solid var(--ff-color-border);
	}

	input::-webkit-slider-runnable-track {
		background: linear-gradient(
			to right,
			var(--ff-color-on-surface) 0%,
			var(--ff-color-on-surface) var(--progress, 0%),
			var(--ff-color-surface) var(--progress, 0%),
			var(--ff-color-surface) 100%
		);
		border-radius: var(--rounded-full);
	}

	input::-moz-range-track {
		height: 8px;
		border-radius: var(--rounded-full);
		background: var(--ff-color-surface);
	}

	input::-moz-range-progress {
		height: 8px;
		border-radius: var(--rounded-full);
		background: var(--ff-color-on-surface);
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
</style>

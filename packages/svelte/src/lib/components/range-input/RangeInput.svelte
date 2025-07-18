<script lang="ts">
	import type { SizeType } from "@dxdns/feflow-core/types"
	import { classMapUtil, mergeStyleUtil } from "@dxdns/feflow-core/utils"
	import { onMount } from "svelte"
	import type { HTMLInputAttributes } from "svelte/elements"

	interface Props
		extends Omit<Omit<Omit<HTMLInputAttributes, "value">, "type">, "size"> {
		value?: number
		icon?: string | SVGElement
		size?: SizeType
	}

	let {
		class: className = "",
		value = $bindable(0),
		icon,
		size = "md",
		min = 0,
		max = 100,
		...rest
	}: Props = $props()

	let el: HTMLInputElement

	let progressValue = $state(0)

	function updateProgress(e: EventTarget & HTMLInputElement) {
		const { value, min, max } = e
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
	}

	function dataIconUrl(icon: string | SVGElement): string {
		const prefix = "data:image/svg+xml;utf8,"

		if (typeof icon === "string") {
			return `${prefix}${encodeURIComponent(icon)}`
		}

		const serializer = new XMLSerializer()
		const encoded = encodeURIComponent(serializer.serializeToString(icon))
			.replace(/'/g, "%27")
			.replace(/"/g, "%22")
		return `${prefix}${encoded}`
	}

	onMount(() => {
		updateProgress(el)
	})
</script>

<input
	{...rest}
	class={classMapUtil(className, size, "rangeInput")}
	bind:this={el}
	{value}
	{min}
	{max}
	type="range"
	style={mergeStyleUtil(
		`--progress: ${progressValue}%;`,
		icon && `--thumb-icon: url(${dataIconUrl(icon)});`
	)}
	oninput={(e) => {
		rest.oninput?.(e)
		updateProgress(e.currentTarget)
		value = Number(e.currentTarget.value)
	}}
/>

<style>
	:root {
		--rounded-full: 9999px;
		--thumb-size: 18px;
		--thumb-border: 2px solid var(--ff-border);
		--thumb-bg: var(--ff-on-surface);
		--track-height: 6px;
	}

	.rangeInput {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		width: 100%;
		height: var(--track-height);
		border-radius: 5px;
		background: var(--ff-surface);
		outline: none;
		opacity: 0.8;
		cursor: pointer;
		user-select: none;
		transition: opacity 0.2s ease;
		border: 1px solid var(--ff-border);
	}

	.rangeInput:hover,
	.rangeInput:focus-visible {
		opacity: 1;
	}

	.rangeInput:focus-visible {
		outline: 2px solid var(--thumb-bg);
		outline-offset: 2px;
	}

	/* WebKit */

	.rangeInput::-webkit-slider-runnable-track {
		height: var(--track-height);
		border-radius: var(--rounded-full);
		background: linear-gradient(
			to right,
			var(--thumb-bg) 0%,
			var(--thumb-bg) var(--progress, 0%),
			color-mix(in srgb, var(--ff-surface) 80%, gray) var(--progress, 0%),
			color-mix(in srgb, var(--ff-surface) 80%, gray) 100% 100%
		);
	}

	.rangeInput::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: var(--thumb-size);
		height: var(--thumb-size);
		border-radius: 50%;
		border: var(--thumb-border);
		transition:
			background-color 0.3s ease,
			border-color 0.3s ease;
		position: relative;
		margin-top: calc((var(--track-height) - var(--thumb-size)) / 2);
		cursor: pointer;
		background: var(--thumb-bg);
		background-image: var(--thumb-icon);
		background-size: contain;
		background-position: center center;
		background-repeat: no-repeat;
	}

	.rangeInput:active::-webkit-slider-thumb {
		border-color: var(--thumb-bg);
	}

	input::-webkit-inner-spin-button,
	input::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */

	.rangeInput::-moz-range-track {
		height: var(--track-height);
		border-radius: var(--rounded-full);
		background: color-mix(in srgb, var(--ff-surface) 80%, gray);
	}

	.rangeInput::-moz-range-progress {
		height: var(--track-height);
		border-radius: var(--rounded-full);
		background: var(--thumb-bg);
	}

	.rangeInput::-moz-range-thumb {
		width: var(--thumb-size);
		height: var(--thumb-size);
		border-radius: 50%;
		border: var(--thumb-border);
		cursor: pointer;
		transition:
			background-color 0.3s ease,
			border-color 0.3s ease;
		background: var(--thumb-bg);
		background-image: var(--thumb-icon);
		background-size: contain;
		background-position: center center;
		background-repeat: no-repeat;
	}

	.rangeInput:active::-moz-range-thumb {
		border-color: var(--thumb-bg);
	}

	/* sizes */

	.rangeInput.xs {
		--thumb-size: 12px;
		--track-height: 3px;
		--thumb-border: 1.5px solid var(--ff-border);
	}

	.rangeInput.sm {
		--thumb-size: 14px;
		--track-height: 4px;
		--thumb-border: 1.75px solid var(--ff-border);
	}

	.rangeInput.md {
		--thumb-size: 18px;
		--track-height: 6px;
		--thumb-border: 2px solid var(--ff-border);
	}

	.rangeInput.lg {
		--thumb-size: 24px;
		--track-height: 8px;
		--thumb-border: 2.5px solid var(--ff-border);
	}

	.rangeInput.xl {
		--thumb-size: 30px;
		--track-height: 10px;
		--thumb-border: 3px solid var(--ff-border);
	}
</style>

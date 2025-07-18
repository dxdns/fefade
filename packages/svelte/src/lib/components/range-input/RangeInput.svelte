<script lang="ts">
	import type { SizeType } from "@dxdns/feflow-core/types"
	import { classMapUtil, mergeStyleUtil } from "@dxdns/feflow-core/utils"
	import { onMount } from "svelte"
	import type { HTMLInputAttributes } from "svelte/elements"
	import styles from "@dxdns/feflow-core/styles/RangeInput.module.css"

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
	bind:this={el}
	class={classMapUtil(
		className,
		[className, styles],
		[size, styles],
		styles.rangeInput
	)}
	{value}
	{min}
	{max}
	style={mergeStyleUtil(
		`--progress: ${progressValue}%;`,
		icon && `--thumb-icon: url(${dataIconUrl(icon)});`
	)}
	oninput={(e) => {
		rest.oninput?.(e)
		updateProgress(e.currentTarget)
		value = Number(e.currentTarget.value)
	}}
	type="range"
/>

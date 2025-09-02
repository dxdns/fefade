<script lang="ts">
	import type { RangeInputType } from "@dxdns-kit/core/types"
	import {
		classMapUtil,
		mergeStyleUtil,
		dataIconUrlUtil
	} from "@dxdns-kit/core/utils"
	import type { HTMLInputAttributes } from "svelte/elements"
	import styles from "@dxdns-kit/core/styles/RangeInput.module.css"

	interface Props
		extends Omit<Omit<Omit<HTMLInputAttributes, "value">, "type">, "size">,
			RangeInputType {}

	let {
		class: className = "",
		value = $bindable(0),
		icon,
		size = "md",
		min = 0,
		max = 100,
		...rest
	}: Props = $props()

	const internalValue = $derived.by(() => {
		const minNum = Number(min)
		const maxNum = Number(max)
		const valueNum = Number(value)

		if (
			isNaN(minNum) ||
			isNaN(maxNum) ||
			isNaN(valueNum) ||
			maxNum === minNum
		) {
			return 0
		} else {
			return ((valueNum - minNum) / (maxNum - minNum)) * 100
		}
	})
</script>

<div style="position: relative;">
	<input
		{...rest}
		class={classMapUtil(
			className,
			[className, styles],
			[size, styles],
			styles.rangeInput
		)}
		style={mergeStyleUtil(
			`--internal-value: ${internalValue}%;`,
			icon && `--thumb-icon: url(${dataIconUrlUtil(icon)});`
		)}
		oninput={(e) => {
			rest.oninput?.(e)
			value = Number(e.currentTarget.value)
		}}
		type="range"
		{value}
		{min}
		{max}
	/>
	<output
		class={styles.bubble}
		style="left: calc({internalValue}% + ({8 - internalValue * 0.15}px))"
	>
		{internalValue.toFixed(0)}
	</output>
</div>

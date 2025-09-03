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
		extends Omit<
				Omit<Omit<Omit<HTMLInputAttributes, "value">, "type">, "size">,
				"color"
			>,
			RangeInputType {}

	let {
		class: className = "",
		color = "primary",
		value = $bindable(0),
		icon,
		size = "md",
		showValue = true,
		min = 0,
		max = 100,
		...rest
	}: Props = $props()

	let bubbleActive = $state(false)

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

<div class={styles.wrapper}>
	<input
		{...rest}
		type="range"
		class={classMapUtil(
			className,
			[className, styles],
			[size, styles],
			[color, styles],
			styles.rangeInput
		)}
		style={mergeStyleUtil(
			`--internal-value: ${internalValue}%;`,
			icon && `--thumb-icon: url(${dataIconUrlUtil(icon)});`
		)}
		oninput={(e) => {
			rest.oninput?.(e)
			value = Number(e.currentTarget.value)
			bubbleActive = true
		}}
		ontouchend={() => {
			bubbleActive = false
		}}
		onmouseup={() => {
			bubbleActive = false
		}}
		{value}
		{min}
		{max}
	/>
	{#if showValue}
		<output
			class={classMapUtil(styles.bubble, { [styles.active]: bubbleActive })}
			style="left: calc({internalValue}% + ({8 - internalValue * 0.15}px))"
		>
			{internalValue.toFixed(0)}
		</output>
	{/if}
</div>

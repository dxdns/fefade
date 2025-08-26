<script lang="ts">
	import type { SizeType } from "@navnex-kit/core/types"
	import {
		classMapUtil,
		mergeStyleUtil,
		dataIconUrlUtil
	} from "@navnex-kit/core/utils"
	import type { HTMLInputAttributes } from "svelte/elements"
	import styles from "@navnex-kit/core/styles/RangeInput.module.css"

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

	const progressValue = $derived.by(() => {
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

<input
	{...rest}
	class={classMapUtil(
		className,
		[className, styles],
		[size, styles],
		styles.rangeInput
	)}
	style={mergeStyleUtil(
		`--progress: ${progressValue}%;`,
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

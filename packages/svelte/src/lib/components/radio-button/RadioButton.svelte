<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"
	import styles from "./RadioButton.module.css"
	import type { SizeType, StatusColorType } from "@fefade/core/types"
	import { classMapUtil } from "@fefade/core/utils"

	interface Props extends Omit<HTMLInputAttributes, "size"> {
		label?: string
		size?: SizeType
		color?: StatusColorType | "secondary"
	}

	let {
		class: className = "",
		label,
		size = "sm",
		color = "secondary",
		...rest
	}: Props = $props()
</script>

<label
	class={classMapUtil(
		className,
		[className, styles],
		[color, styles],
		styles.radioButton
	)}
>
	<input {...rest} type="radio" />
	<div class={classMapUtil(styles.circle, [size, styles])}></div>
	{#if label}
		{label}
	{/if}
</label>

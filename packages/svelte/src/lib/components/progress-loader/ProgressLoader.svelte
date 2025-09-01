<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import { classMapUtil, mergeStyleUtil } from "@feflow-ui/core/utils"
	import type { StatusColorType } from "@feflow-ui/core/types"
	import styles from "@feflow-ui/core/styles/ProgressLoader.module.css"

	interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {
		value: number
		color?: StatusColorType
	}

	let {
		class: className = "",
		value,
		color = "info",
		...rest
	}: Props = $props()
</script>

<div
	{...rest}
	class={classMapUtil(
		className,
		[className, styles],
		[color, styles],
		styles.progressLoader
	)}
	style={mergeStyleUtil(`--value: ${value}%;`, rest.style)}
></div>

<script lang="ts">
	import { Constants } from "@navnex-kit/core"
	import type { HTMLAttributes } from "svelte/elements"
	import {
		capitalizeUtil,
		classMapUtil,
		mergeStyleUtil
	} from "@navnex-kit/core/utils"
	import {
		ErrorIcon,
		InfoIcon,
		WarningIcon,
		CheckCircleIcon
	} from "../../icons/index.js"
	import type { StatusColorType } from "@navnex-kit/core/types"
	import styles from "@navnex-kit/core/styles/Alert.module.css"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		color?: StatusColorType
	}

	let {
		class: className = "",
		color = "info",
		children,
		...rest
	}: Props = $props()

	const statusOnColor =
		Constants.themeColorVar[
			`on${capitalizeUtil(color)}` as keyof typeof Constants.themeColorVar
		]

	const statusColor = Constants.themeColorVar[color]

	const Icon = {
		error: ErrorIcon,
		info: InfoIcon,
		warning: WarningIcon,
		success: CheckCircleIcon,
		primary: InfoIcon
	}[color]
</script>

<div
	{...rest}
	class={classMapUtil(className, [className, styles], styles.alert)}
	style={mergeStyleUtil(
		`--border-color: ${statusOnColor};`,
		`--color: ${statusOnColor}`,
		`--bg-color: ${statusColor};`,
		rest.style
	)}
>
	<Icon
		fill={statusOnColor}
		height="20px"
		width="20px"
		style="max-width: max-content;"
	/>
	{@render children?.()}
</div>

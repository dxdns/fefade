<script lang="ts">
	import { Constants } from "@feflow-ui/core"
	import type { HTMLAttributes } from "svelte/elements"
	import { classMapUtil } from "@feflow-ui/core/utils"
	import type { StatusColorType } from "@feflow-ui/core/types"
	import {
		checkCircleIcon,
		errorIcon,
		infoIcon,
		warningIcon
	} from "@feflow-ui/core/icons"
	import styles from "@feflow-ui/core/styles/Alert.module.css"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		color?: StatusColorType
	}

	let {
		class: className = "",
		color = "info",
		children,
		...rest
	}: Props = $props()

	const statusOnColor = Constants.statusOnColor(color)

	const Icon = {
		error: errorIcon,
		info: infoIcon,
		warning: warningIcon,
		success: checkCircleIcon
	}[color]
</script>

<div
	{...rest}
	class={classMapUtil(
		className,
		[className, styles],
		[color, styles],
		styles.alert
	)}
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 -960 960 960"
		style="
		display: inline-block; 
		vertical-align: middle;
		fill: {statusOnColor};
		width: 20px;
		height: 20px;
		max-width: max-content;
		"
	>
		<path d={Icon} />
	</svg>
	{@render children?.()}
</div>

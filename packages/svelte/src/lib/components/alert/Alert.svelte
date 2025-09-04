<script lang="ts">
	import { Constants } from "@dxdns-kit/core"
	import type { HTMLAttributes } from "svelte/elements"
	import { classMapUtil } from "@dxdns-kit/core/utils"
	import type { AlertType } from "@dxdns-kit/core/types"
	import {
		checkCircleIcon,
		errorIcon,
		infoIcon,
		warningIcon
	} from "@dxdns-kit/core/icons"
	import styles from "@dxdns-kit/core/styles/Alert.module.css"

	interface Props
		extends Omit<HTMLAttributes<HTMLDivElement>, "color">,
			AlertType {}

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

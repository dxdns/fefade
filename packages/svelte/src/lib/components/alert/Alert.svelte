<script lang="ts">
	import { Constants } from "@navnex-kit/core"
	import type { HTMLAttributes } from "svelte/elements"
	import {
		capitalizeUtil,
		classMapUtil,
		mergeStyleUtil
	} from "@navnex-kit/core/utils"
	import type { StatusColorType } from "@navnex-kit/core/types"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		color?: StatusColorType
	}

	let {
		class: className = "",
		color = "info",
		children,
		...rest
	}: Props = $props()

	const borderColor =
		Constants.themeColorVar[
			`on${capitalizeUtil(color)}` as `on${Capitalize<StatusColorType>}`
		]

	const statusColor = Constants.themeColorVar[color]
</script>

<div
	{...rest}
	class={classMapUtil(className, "alert", `bg-${color}`, `text-on-${color}`)}
	style={mergeStyleUtil(
		`--border-color: ${borderColor};`,
		`--bg-color: ${statusColor};`,
		rest.style
	)}
>
	{@render children?.()}
</div>

<style>
	.alert {
		/* background: color-mix(in oklab, var(--bg-color) 30%, transparent); */
		padding: 1rem;
		border-radius: 5px;
		border: 1px solid color-mix(in srgb, var(--border-color) 10%, transparent);
	}
</style>

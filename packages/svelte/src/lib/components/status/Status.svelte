<script lang="ts">
	import { Constants } from "@fefade/core"
	import {
		classMapUtil,
		mergeStyleUtil,
		normalizeSizeUtil
	} from "@fefade/core/utils"
	import type { HTMLAttributes } from "svelte/elements"
	import type { StatusType } from "@fefade/core/types"
	import styles from "@fefade/core/styles/Status.module.css"

	interface Props
		extends Omit<HTMLAttributes<HTMLDivElement>, "color">,
			StatusType {}

	let {
		class: className = "",
		variant = "none",
		color = Constants.themeColorVar.bg,
		size = 30,
		...rest
	}: Props = $props()
</script>

<div
	{...rest}
	class={classMapUtil(
		className,
		[className, styles],
		[variant, styles],
		styles.status
	)}
	style={mergeStyleUtil(
		`--color: ${color};
        --bg: whitesmoke;
        --size: ${normalizeSizeUtil(size)};`,
		rest.style
	)}
></div>

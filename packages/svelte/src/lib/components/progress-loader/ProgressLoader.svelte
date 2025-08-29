<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import styles from "./ProgressLoader.module.css"
	import { classMapUtil, mergeStyleUtil } from "@navnex-kit/core/utils"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		progress: number
	}

	let { class: className = "", progress, ...rest }: Props = $props()
</script>

<div
	{...rest}
	class={classMapUtil(className, [className, styles], styles.progressLoader)}
	style={mergeStyleUtil(
		`--width: ${progress}%;`,
		`--bg-color: var(--nn-on-success);`,
		rest.style
	)}
></div>

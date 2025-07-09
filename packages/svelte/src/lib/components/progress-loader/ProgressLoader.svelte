<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import styles from "./ProgressLoader.module.css"
	import { classMapUtil } from "core/utils"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		progress: number
	}

	let { class: className = "", progress, ...rest }: Props = $props()
</script>

<div
	{...rest}
	class={classMapUtil(className, [className, styles], styles.progressLoader)}
>
	<div class={styles.progress} style="width: {progress}%;"></div>
</div>

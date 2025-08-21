<script lang="ts">
	import type { SpinnerType } from "@feflow-ui/core/types"
	import { classMapUtil } from "@feflow-ui/core/utils"
	import type { HTMLAttributes } from "svelte/elements"
	import styles from "@feflow-ui/core/styles/Spinner.module.css"

	interface Props extends HTMLAttributes<HTMLSpanElement>, SpinnerType {}

	let { class: className = "", size = "sm", ...rest }: Props = $props()
</script>

<span
	{...rest}
	class={classMapUtil(
		className,
		[className, styles],
		[size, styles],
		styles.spinner
	)}
></span>

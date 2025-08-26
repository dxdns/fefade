<script lang="ts">
	import type { SpinnerType } from "@navnex-kit/core/types"
	import { classMapUtil } from "@navnex-kit/core/utils"
	import type { HTMLAttributes } from "svelte/elements"
	import styles from "@navnex-kit/core/styles/Spinner.module.css"

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

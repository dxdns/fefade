<script lang="ts">
	import type { SizeType } from "../../types/index.js"
	import { classMapUtil } from "@feflow/core/utils"
	import type { HTMLAttributes } from "svelte/elements"
	import styles from "@feflow/core/styles/Spinner.module.css"

	interface Props extends HTMLAttributes<HTMLSpanElement> {
		size?: SizeType
	}

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

<script lang="ts">
	import type { SpinnerType } from "@dxdns-kit/core/types"
	import { classMapUtil } from "@dxdns-kit/core/utils"
	import type { HTMLAttributes } from "svelte/elements"
	import styles from "@dxdns-kit/core/styles/Spinner.module.css"

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

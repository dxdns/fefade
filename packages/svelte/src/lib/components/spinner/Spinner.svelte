<script lang="ts">
	import type { SpinnerType } from "@dxdns/feflow-core/types"
	import { classMapUtil } from "@dxdns/feflow-core/utils"
	import type { HTMLAttributes } from "svelte/elements"
	import styles from "@dxdns/feflow-core/styles/Spinner.module.css"

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

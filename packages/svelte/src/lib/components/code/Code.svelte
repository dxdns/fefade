<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import { classMapUtil } from "@dxdns/feflow-core/utils"
	import styles from "@dxdns/feflow-core/styles/Code.module.css"

	interface Props extends HTMLAttributes<HTMLDivElement> {}

	let { class: className = "", children, ...rest }: Props = $props()
</script>

<div
	{...rest}
	class={classMapUtil(className, [className, styles], styles.code)}
>
	{@render children?.()}
</div>

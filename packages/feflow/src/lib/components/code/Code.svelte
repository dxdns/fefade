<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import styles from "./Code.module.css"

	interface Props extends HTMLAttributes<HTMLDivElement> {}

	let { class: className = "", children, ...rest }: Props = $props()
</script>

<div
	{...rest}
	class={classMapUtil(className, [className, styles], styles.code)}
>
	{@render children?.()}
</div>

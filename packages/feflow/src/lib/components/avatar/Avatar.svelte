<script lang="ts">
	import type { HTMLImgAttributes } from "svelte/elements"
	import { classMapUtil } from "@dxdns/feflow-core/utils"
	import styles from "./Avatar.module.css"

	interface Props extends Omit<HTMLImgAttributes, "width" | "height"> {
		textFallback?: string
		width?: string
		height?: string
	}

	let {
		class: className = "",
		width,
		height,
		textFallback,
		...rest
	}: Props = $props()

	let hasError = $state(false)

	function handleError() {
		hasError = true
	}
</script>

<div
	class={classMapUtil(className, [className, styles], styles.avatar)}
	style="width: {width}; height: {height};"
>
	{#if !hasError && rest.src}
		<img onerror={handleError} {...rest} />
	{:else if textFallback}
		<span class={styles.textFallback}>
			{textFallback.charAt(0).toUpperCase()}
		</span>
	{/if}
</div>

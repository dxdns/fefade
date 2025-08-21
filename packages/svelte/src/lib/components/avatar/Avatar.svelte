<script lang="ts">
	import type { HTMLImgAttributes } from "svelte/elements"
	import { classMapUtil, mergeStyleUtil } from "@feflow-ui/core/utils"
	import styles from "@feflow-ui/core/styles/Avatar.module.css"
	import type { AvatarType } from "@feflow-ui/core/types"

	interface Props
		extends Omit<HTMLImgAttributes, "width" | "height">,
			AvatarType {}

	let {
		class: className = "",
		width,
		height,
		textFallback,
		size = "md",
		children,
		...rest
	}: Props = $props()

	let hasError = $state(false)

	function handleError() {
		hasError = true
	}
</script>

<div
	class={classMapUtil(
		className,
		[className, styles],
		[size, styles],
		styles.avatar
	)}
	style={mergeStyleUtil(
		width && `width: ${width}`,
		height && `height: ${height}`,
		rest.style
	)}
>
	{#if !hasError && rest.src}
		<img {...rest} onerror={handleError} />
	{:else if textFallback}
		<span class={styles.textFallback}>
			{textFallback.charAt(0).toUpperCase()}
		</span>
	{/if}
	{@render children?.()}
</div>

<script lang="ts">
	import type { HTMLImgAttributes } from "svelte/elements"
	import { classMapUtil } from "@dxdns/feflow-core/utils"
	import styles from "@dxdns/feflow-core/styles/Avatar.module.css"
	import type { AvatarType } from "@dxdns/feflow-core/types"

	interface Props
		extends Omit<HTMLImgAttributes, "width" | "height">,
			AvatarType {}

	let {
		class: className = "",
		width,
		height,
		textFallback,
		size = "md",
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
	style="
	width: {width};
	height: {height};
	"
>
	{#if !hasError && rest.src}
		<img {...rest} onerror={handleError} />
	{:else if textFallback}
		<span class={styles.textFallback}>
			{textFallback.charAt(0).toUpperCase()}
		</span>
	{/if}
</div>

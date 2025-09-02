<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import { classMapUtil } from "@feflow-ui/core/utils"
	import Button from "../button/index.js"
	import type { AlignType } from "@feflow-ui/core/types"
	import { closeIcon } from "@feflow-ui/core/icons"
	import styles from "@feflow-ui/core/styles/ModalHeader.module.css"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		align?: AlignType
		handleClose?: () => void
	}

	let {
		class: className = "",
		align = "start",
		handleClose,
		children,
		...rest
	}: Props = $props()
</script>

<div
	{...rest}
	class={classMapUtil(className, [className, styles], styles.header)}
>
	<div class={styles.content} style="justify-content: {align};">
		{@render children?.()}
	</div>
	{#if handleClose}
		<Button variant="text" onclick={handleClose}>
			<svg
				viewBox="0 -960 960 960"
				style="
				display: inline-block; 
				vertical-align: middle;
				fill: currentColor;
				width: 24px;
				height: 24px;
				"
			>
				<path d={closeIcon}></path>
			</svg>
		</Button>
	{/if}
</div>

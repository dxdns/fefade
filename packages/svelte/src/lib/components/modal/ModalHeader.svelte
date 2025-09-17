<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import { classMapUtil } from "@fefade/core/utils"
	import Button from "../button/index.js"
	import type { AlignType } from "@fefade/core/types"
	import { closeIcon } from "@fefade/core/icons"
	import styles from "@fefade/core/styles/ModalHeader.module.css"

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

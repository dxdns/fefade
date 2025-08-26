<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import { classMapUtil } from "@navnex-kit/core/utils"
	import Button from "../button/index.js"
	import { CloseIcon } from "../../icons/index.js"
	import type { AlignType } from "@navnex-kit/core/types"
	import styles from "@navnex-kit/core/styles/ModalHeader.module.css"

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
			<CloseIcon />
		</Button>
	{/if}
</div>

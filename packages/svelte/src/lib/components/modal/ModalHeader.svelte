<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import { classMapUtil } from "@dxdns/feflow-core/utils"
	import Button from "../button/index.js"
	import { CloseIcon } from "../../icons/index.js"
	import type { AlignType } from "@dxdns/feflow-core/types"
	import styles from "@dxdns/feflow-core/styles/ModalHeader.module.css"

	export interface ModalHeaderProps {
		align?: AlignType
		handleClose?: () => void
	}

	interface Props extends ModalHeaderProps, HTMLAttributes<HTMLDivElement> {}

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

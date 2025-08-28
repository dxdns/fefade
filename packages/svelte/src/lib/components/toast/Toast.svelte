<script lang="ts">
	import { CloseIcon } from "../../icons/index.js"
	import type { ToastType } from "@navnex-kit/core/types"
	import { classMapUtil } from "@navnex-kit/core/utils"
	import type { HTMLAttributes } from "svelte/elements"
	import Button from "../button/index.js"
	import { Alert } from "../alert/index.js"
	import styles from "@navnex-kit/core/styles/Toast.module.css"

	interface Props
		extends Omit<HTMLAttributes<HTMLDivElement>, "color">,
			ToastType {}

	let {
		class: className = "",
		message,
		isClosable = false,
		handleClose,
		...rest
	}: Props = $props()
</script>

<Alert {...rest} class={classMapUtil(className, styles.toast)}>
	<div class={styles.message}>
		{message}
	</div>
	{#if isClosable}
		<Button
			roundedFull
			size="xs"
			style="
			padding: 0; 
			height: 20px;
			min-width: 20px;
			"
			onclick={handleClose}
		>
			<CloseIcon height="16px" width="16px" />
		</Button>
	{/if}
</Alert>

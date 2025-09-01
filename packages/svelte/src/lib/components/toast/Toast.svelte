<script lang="ts">
	import { CloseIcon } from "../../icons/index.js"
	import type { ToastType } from "@feflow-ui/core/types"
	import { classMapUtil } from "@feflow-ui/core/utils"
	import type { HTMLAttributes } from "svelte/elements"
	import Button from "../button/index.js"
	import { Alert } from "../alert/index.js"
	import styles from "@feflow-ui/core/styles/Toast.module.css"
	import { toastState } from "../../states/index.js"
	import { onDestroy } from "svelte"
	import ProgressLoader from "../progress-loader/index.js"

	interface Props
		extends Omit<Omit<HTMLAttributes<HTMLDivElement>, "color">, "id">,
			ToastType {}

	let {
		class: className = "",
		id,
		message,
		isClosable = false,
		handleClose,
		...rest
	}: Props = $props()

	const toast = toastState()._getById(id)
	const toastRemaining = toast?.remaining ?? 3000
	let timerValue = $state(toastRemaining)

	const interval = setInterval(() => {
		if (timerValue > 0) {
			timerValue = Math.max(timerValue - 100, 0)
		}
	}, 100)

	onDestroy(() => {
		clearInterval(interval)
	})
</script>

<div style="position: relative; overflow: hidden;">
	<Alert
		{...rest}
		class={classMapUtil(className, styles.toast)}
		style="padding-bottom: 0.5rem;"
	>
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
	<ProgressLoader
		progress={(timerValue / toastRemaining) * 100}
		style="position: absolute; bottom: 0; left: 3px;"
	/>
</div>

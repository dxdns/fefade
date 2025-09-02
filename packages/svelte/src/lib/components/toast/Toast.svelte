<script lang="ts">
	import type { ToastType } from "@feflow-ui/core/types"
	import { classMapUtil } from "@feflow-ui/core/utils"
	import type { HTMLAttributes } from "svelte/elements"
	import Button from "../button/index.js"
	import { Alert } from "../alert/index.js"
	import { toastState } from "../../states/index.js"
	import { onDestroy } from "svelte"
	import ProgressLoader from "../progress-loader/index.js"
	import { closeIcon } from "@feflow-ui/core/icons"
	import styles from "@feflow-ui/core/styles/Toast.module.css"

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

	const _toastState = toastState()
	const toast = _toastState._getById(id)
	const toastRemaining = toast?.remaining ?? 3000
	let timerValue = $state(toastRemaining)

	const interval = setInterval(() => {
		if (timerValue > 0 && !toast?.paused) {
			timerValue = Math.max(timerValue - 100, 0)
		}
	}, 100)

	onDestroy(() => {
		clearInterval(interval)
	})
</script>

<Alert
	{...rest}
	class={classMapUtil(className, styles.toast)}
	onmouseenter={() => {
		_toastState.pause(id)
	}}
	onmouseleave={() => {
		_toastState.resume(id)
	}}
>
	<div class={styles.wrapper}>
		<div class={styles.message}>
			{message}
		</div>
		{#if rest.withProgressLoader}
			<ProgressLoader
				value={(timerValue / toastRemaining) * 100}
				color={rest.color}
			/>
		{/if}
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
			<svg
				viewBox="0 -960 960 960"
				style="
				display: inline-block; 
				vertical-align: middle;
				fill: currentColor;
				width: 16px;
				height: 16px;
				"
			>
				<path d={closeIcon}></path>
			</svg>
		</Button>
	{/if}
</Alert>

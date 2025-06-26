<script lang="ts">
	import {
		CloseIcon,
		ErrorIcon,
		InfoIcon,
		WarningIcon
	} from "../../icons/index.js"
	import type { StatusColorType, ToastType } from "../../types/index.js"
	import classMapUtil from "../../utils/classMapUtil.js"
	import type { HTMLAttributes } from "svelte/elements"
	import Button from "../button/index.js"

	interface Props
		extends HTMLAttributes<HTMLDivElement>,
			Omit<ToastType, "id" | "color"> {
		color?: StatusColorType | "primary"
		handleClose?: () => void
	}

	let {
		class: className = "",
		message,
		color = "primary",
		duration = 3000,
		isClosable = false,
		handleClose,
		...rest
	}: Props = $props()

	const Icon = {
		error: ErrorIcon,
		info: InfoIcon,
		warning: WarningIcon,
		success: InfoIcon,
		primary: InfoIcon
	}[color]
</script>

<div
	{...rest}
	class={classMapUtil(className, "toast", `bg-${color}`, `text-on-${color}`, {
		["noBorder"]: color === "primary"
	})}
>
	{#if Icon}
		<Icon
			fill="var(--ff-color-on-{color})"
			height="20px"
			width="20px"
			style="max-width: max-content;"
		/>
	{/if}
	<div
		style="
		flex:1; 
		padding-inline-end: {isClosable ? '1rem' : 0};
		margin: 0;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		"
	>
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
</div>

<style>
	.toast {
		user-select: none;
		position: relative;
		padding: 0.5rem 1.25rem;
		border-radius: 0.5rem;
		font-size: 1rem;
		font-weight: 500;
		box-shadow:
			0 4px 6px rgba(0, 0, 0, 0.1),
			0 10px 15px rgba(0, 0, 0, 0.15);
		backdrop-filter: blur(6px);
		display: flex;
		align-items: center;
		gap: 0.5rem;
		justify-content: space-between;
		border-left: 4px solid currentColor;
		pointer-events: all;
		min-width: 100px;
	}

	.noBorder {
		border-left: 0;
	}
</style>

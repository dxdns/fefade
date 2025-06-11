<script lang="ts">
	import { ErrorIcon, InfoIcon, WarningIcon } from "../../icons/index.js"
	import type { StatusColorType, ToastType } from "../../types/index.js"
	import classMapUtil from "../../utils/classMapUtil.js"
	import type { HTMLAttributes } from "svelte/elements"

	interface Props
		extends HTMLAttributes<HTMLDivElement>,
			Omit<ToastType, "id" | "color"> {
		color?: StatusColorType | "primary"
	}

	let {
		class: className = "",
		message,
		color = "primary",
		duration = 3000,
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
		<Icon fill="var(--ff-color-on-{color})" height="20px" width="20px" />
	{/if}
	{message}
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
		border-left: 4px solid currentColor;
		pointer-events: all;
	}

	.noBorder {
		border-left: 0;
	}
</style>

<script lang="ts">
	import { classMapUtil } from "@feflow-ui/core/utils"
	import { onDestroy } from "svelte"
	import type { HTMLAttributes } from "svelte/elements"

	interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {
		duration?: number
		onChange?: (value: number, valueFormated: string) => void
		stopped?: boolean
	}

	let {
		class: className = "",
		duration = $bindable(0),
		onChange,
		stopped,
		...rest
	}: Props = $props()

	let interval = setInterval(() => {
		if (duration > 0 && !stopped) {
			duration -= isTimestamp ? 1000 : 1
			onChange?.(duration, formatTime(duration))
		}
	}, 1000)

	const isTimestamp = $derived(duration > 1e10)

	function formatTime(value: number) {
		const date = new Date()
		const totalSeconds = isTimestamp
			? date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()
			: value

		const h = Math.floor(totalSeconds / 3600)
		const m = Math.floor((totalSeconds % 3600) / 60)
		const s = totalSeconds % 60

		return [h, m, s].map((n) => String(n).padStart(2, "0")).join(":")
	}

	onDestroy(() => {
		clearInterval(interval)
	})
</script>

<div
	{...rest}
	class={classMapUtil(className, "timer", { blink: duration === 0 })}
>
	{formatTime(duration)}
</div>

<style>
	.timer {
		font-weight: bold;
		font-size: 48px;
	}

	@keyframes blink {
		0%,
		50%,
		100% {
			opacity: 1;
		}
		25%,
		75% {
			opacity: 0;
		}
	}

	.blink {
		animation: blink 1s infinite;
	}
</style>

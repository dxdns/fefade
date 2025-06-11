<script lang="ts">
	import type { PositionType } from "../../types/index.js"
	import { toastState } from "../../states/index.js"
	import Toast from "./Toast.svelte"
	import { fade, fly } from "svelte/transition"
	import type { HTMLAttributes } from "svelte/elements"
	import { classMapUtil, mergeStyleUtil } from "../../utils/index.js"
	import styles from "./Toaster.module.css"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		fullWidth?: boolean
	}

	let { class: className, fullWidth, ...rest }: Props = $props()

	const { data } = toastState()

	const positionStyles: Record<PositionType, string> = {
		"top-left": "top: 20px; left: 20px;",
		"top-right": "top: 20px; right: 20px;",
		"bottom-left": "bottom: 20px; left: 20px;",
		"bottom-right": "bottom: 20px; right: 20px;",
		"top-center": "top: 20px; left: 50%; transform: translateX(-50%);",
		"bottom-center": "bottom: 20px; left: 50%; transform: translateX(-50%);"
	}

	const flyConfigs: Record<PositionType, { x: number; y: number }> = {
		"top-left": { x: -64, y: 0 },
		"top-right": { x: 64, y: 0 },
		"bottom-left": { x: -64, y: 0 },
		"bottom-right": { x: 64, y: 0 },
		"top-center": { x: 0, y: -64 },
		"bottom-center": { x: 0, y: 64 }
	}
</script>

{#each Object.entries(positionStyles) as [position, style] (position)}
	{@const grouped = data.toasts
		.filter((t) => t.position === position)
		.slice(-3)
		.reverse()}
	<div
		{...rest}
		class={classMapUtil(className, [styles, className], styles.toaster, {
			[styles.fullWidth]: fullWidth,
			[styles.top]: position.includes("top"),
			[styles.bottom]: position.includes("bottom")
		})}
		{style}
	>
		{#each grouped as toast, i (toast.id)}
			<span in:fly={flyConfigs[position as PositionType]} out:fade>
				<Toast
					{...toast}
					class={styles.toast}
					style={mergeStyleUtil(
						fullWidth
							? ""
							: `
								transition: transform 0.3s ease, opacity 0.3s ease;
								will-change: transform, opacity;
								transform: translateY(${i * -30}px);
								z-index: ${999 - i};
								opacity: ${1 - i * 0.08};
							`,
						rest.style
					)}
				/>
			</span>
		{/each}
	</div>
{/each}

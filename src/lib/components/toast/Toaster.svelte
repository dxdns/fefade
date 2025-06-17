<script lang="ts">
	import type { PositionType } from "../../types/index.js"
	import { toastState } from "../../states/index.js"
	import Toast from "./Toast.svelte"
	import { fade } from "svelte/transition"
	import type { HTMLAttributes } from "svelte/elements"
	import { classMapUtil, mergeStyleUtil } from "../../utils/index.js"
	import styles from "./Toaster.module.css"
	import { flip } from "svelte/animate"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		fullWidth?: boolean
	}

	let { class: className, fullWidth, ...rest }: Props = $props()

	let isHovered = $state(false)

	const _toastState = toastState()
	const maxToasts = fullWidth ? 1 : 3
	const positions = [
		"top-left",
		"top-right",
		"bottom-left",
		"bottom-right",
		"top-center",
		"bottom-center"
	] as const satisfies PositionType[]
</script>

{#each positions as position}
	{@const pos = position.split("-")[0]}
	{@const isPositionTop = pos === "top"}
	{@const grouped = _toastState.data.toasts
		.filter((t) => t.position === position)
		.slice(-maxToasts)
		.reverse()}
	<div
		{...rest}
		class={classMapUtil(
			className,
			[styles, className],
			styles.toaster,
			[position, styles],
			[pos, styles],
			{
				[styles.fullWidth]: fullWidth
			}
		)}
	>
		{#each grouped as toast, i (toast.id)}
			<div
				role="region"
				class={styles.wrapper}
				animate:flip
				transition:fade={{ duration: 150 }}
				onmouseenter={() => {
					isHovered = true
					_toastState.pauseAll()
				}}
				onmouseleave={() => {
					isHovered = false
					_toastState.resumeAll()
				}}
				style={mergeStyleUtil(
					`
						--toast-padding: 0.75rem 0;
						--toast-side-offset: 0.5rem;
						--toast-opacity: ${isHovered ? 1 : 1 - i * 0.08};
						--toast-z-index: ${isHovered ? 1000 : 1000 - i};
						--toast-translate: ${isPositionTop ? i * (isHovered ? 48 : 8) : -i * (isHovered ? 48 : 8)}px;
						--toast-scale: ${isHovered ? 1 : 1 - i * 0.05};
					`,
					rest.style
				)}
			>
				<Toast
					{...toast}
					class={styles.toast}
					handleClose={() => {
						_toastState.remove(toast.id)
					}}
				/>
			</div>
		{/each}
	</div>
{/each}

<script lang="ts">
	import { Constants } from "@feflow-ui/core"
	import { toastState } from "../../states/index.js"
	import Toast from "./Toast.svelte"
	import { fade } from "svelte/transition"
	import type { HTMLAttributes } from "svelte/elements"
	import { classMapUtil, mergeStyleUtil } from "@feflow-ui/core/utils"
	import { flip } from "svelte/animate"
	import styles from "@feflow-ui/core/styles/Toaster.module.css"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		fullWidth?: boolean
	}

	let { class: className = "", fullWidth, ...rest }: Props = $props()

	let isHovered = $state(false)

	const _toastState = toastState()
	const maxToasts = fullWidth ? 1 : 3
</script>

{#each Constants.alignments as alignment (alignment)}
	{@const pos = alignment.split("-")[0]}
	{@const isPositionTop = pos === "top"}
	{@const grouped = _toastState
		.getAll()
		.filter((t) => t.position === alignment)
		.slice(-maxToasts)
		.reverse()}
	<div
		{...rest}
		class={classMapUtil(
			className,
			[styles, className],
			[alignment, styles],
			[pos, styles],
			{
				[styles.fullWidth]: fullWidth
			},
			styles.toaster
		)}
	>
		{#each grouped as item, i (item.id)}
			<div
				role="region"
				class={styles.wrapper}
				animate:flip
				transition:fade={{
					duration: 150
				}}
				onmouseenter={() => {
					isHovered = true
				}}
				onmouseleave={() => {
					isHovered = false
				}}
				style={mergeStyleUtil(
					`
						--toast-opacity: ${isHovered ? 1 : 1 - i * 0.08};
						--toast-z-index: ${isHovered ? 1000 : 1000 - i};
						--toast-translate: ${isPositionTop ? i * (isHovered ? 52 : 8) : -i * (isHovered ? 52 : 8)}px;
						--toast-scale: ${isHovered ? 1 : 1 - i * 0.05};
					`,
					rest.style
				)}
			>
				<Toast
					{...item}
					class={styles.toast}
					handleClose={() => {
						_toastState.remove(item.id)
					}}
				/>
			</div>
		{/each}
	</div>
{/each}

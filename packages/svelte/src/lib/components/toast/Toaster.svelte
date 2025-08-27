<script lang="ts">
	import { Constants } from "@navnex-kit/core"
	import { toastState } from "../../states/index.js"
	import Toast from "./Toast.svelte"
	import { fade } from "svelte/transition"
	import type { HTMLAttributes } from "svelte/elements"
	import { classMapUtil, mergeStyleUtil } from "@navnex-kit/core/utils"
	import { flip } from "svelte/animate"
	import styles from "@navnex-kit/core/styles/Toaster.module.css"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		fullWidth?: boolean
	}

	let { class: className = "", fullWidth, ...rest }: Props = $props()

	let isHovered = $state(false)

	const toast = toastState()
	const maxToasts = fullWidth ? 1 : 3
</script>

{#each Constants.alignments as alignment (alignment)}
	{@const pos = alignment.split("-")[0]}
	{@const isPositionTop = pos === "top"}
	{@const grouped = toast
		.getAll()
		.filter((t) => t.position === alignment)
		.slice(-maxToasts)
		.reverse()}
	<div
		{...rest}
		class={classMapUtil(
			className,
			[styles, className],
			styles.toaster,
			[alignment, styles],
			[pos, styles],
			{
				[styles.fullWidth]: fullWidth
			}
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
					toast.pauseAll()
				}}
				onmouseleave={() => {
					isHovered = false
					toast.resumeAll()
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
					{...item}
					class={styles.toast}
					handleClose={() => {
						toast.remove(item.id)
					}}
				/>
			</div>
		{/each}
	</div>
{/each}

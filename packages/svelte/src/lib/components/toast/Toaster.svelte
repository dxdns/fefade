<script lang="ts">
	import { Constants } from "@dxdns-kit/core"
	import { toastState } from "../../states/index.js"
	import Toast from "./Toast.svelte"
	import type { HTMLAttributes } from "svelte/elements"
	import { classMapUtil, mergeStyleUtil } from "@dxdns-kit/core/utils"
	import type { AlignmentType } from "@dxdns-kit/core/types"
	import styles from "@dxdns-kit/core/styles/Toaster.module.css"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		fullWidth?: boolean
	}

	let { class: className = "", fullWidth = false, ...rest }: Props = $props()

	let isHovered = $state(false)

	const _toastState = toastState()
	const maxToasts = Constants.MAX_TOASTS(fullWidth)

	function groupedData(alignment: AlignmentType) {
		return Array.from(_toastState.data)
			.filter(([_, t]) => t.position === alignment)
			.slice(-maxToasts)
			.reverse()
	}
</script>

{#each Constants.alignments as alignment (alignment)}
	{@const pos = alignment.split("-")[0]}
	{@const isPositionTop = pos === "top"}
	{@const grouped = groupedData(alignment)}

	<div
		{...rest}
		class={classMapUtil(
			className,
			[className, styles],
			[alignment, styles],
			[pos, styles],
			{
				[styles.fullWidth]: fullWidth
			},
			styles.toaster
		)}
	>
		{#each grouped as [id, item], i (id)}
			<div
				role="region"
				class={styles.wrapper}
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
				<Toast {...item} {id} class={styles.toast} />
			</div>
		{/each}
	</div>
{/each}

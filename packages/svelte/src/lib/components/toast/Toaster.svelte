<script lang="ts">
	import { Constants } from "@dxdns-kit/core"
	import { toastState } from "../../states/index.js"
	import Toast from "./Toast.svelte"
	import type { HTMLAttributes } from "svelte/elements"
	import { classMapUtil, mergeStyleUtil } from "@dxdns-kit/core/utils"
	import styles from "@dxdns-kit/core/styles/Toaster.module.css"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		fullWidth?: boolean
	}

	let { class: className = "", fullWidth = false, ...rest }: Props = $props()

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
					id={item.id}
					message={item.message}
					color={item.color}
					isClosable={item.isClosable}
					withProgressLoader={item.withProgressLoader}
					class={styles.toast}
				/>
			</div>
		{/each}
	</div>
{/each}

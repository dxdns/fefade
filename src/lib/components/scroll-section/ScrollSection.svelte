<script lang="ts">
	import type { SectionType } from "../../types/index.js"
	import Button from "../button/index.js"
	import styles from "./ScrollSection.module.css"
	import classMapUtil from "../../utils/classMapUtil.js"
	import type { ClassValue, HTMLAttributes } from "svelte/elements"
	import {
		deviceDetectorAction,
		dragScrollAction,
		scrollDetectAction
	} from "../../actions/index.js"
	import IconButton from "../icon-button/index.js"
	import type { Snippet } from "svelte"
	interface Props extends HTMLAttributes<HTMLElement> {
		class?: ClassValue
		data: SectionType[]
		icons?: {
			left?: Snippet
			right?: Snippet
		}
	}

	let { class: className = "", data, icons, ...rest }: Props = $props()

	let contentEl: HTMLElement
	let showRightArrow = $state(false)
	let isDragging = $state(false)

	let isDesktopDevice = $state(false)
</script>

<nav {...rest} class={styles.scrollSection}>
	{#if !showRightArrow && icons?.left}
		<IconButton class={styles.arrowIndicator}>
			{@render icons.left?.()}
		</IconButton>
	{/if}
	<div
		class={styles.content}
		bind:this={contentEl}
		use:scrollDetectAction={{
			handler: (v) => {
				showRightArrow = v
			},
			disabled: isDragging
		}}
		use:dragScrollAction={{
			onDrag: () => {
				isDragging = true
			},
			disabled: !isDesktopDevice
		}}
		use:deviceDetectorAction={{
			onChange: ({ deviceType }) => {
				isDesktopDevice = deviceType === "desktop"
			}
		}}
	>
		{#each data as { onClick, reference, isActive }}
			<Button
				variant="text"
				onclick={onClick}
				class={classMapUtil({
					[styles.button]: true,
					[styles.active]: isActive
				})}
			>
				{reference}
			</Button>
		{/each}
	</div>
	{#if showRightArrow && icons?.right}
		<IconButton class={styles.arrowIndicator}>
			{@render icons.right?.()}
		</IconButton>
	{/if}
</nav>

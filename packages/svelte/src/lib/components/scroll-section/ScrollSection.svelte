<script lang="ts">
	import type { SectionType } from "@feflow/core/types"
	import Button from "../button/index.js"
	import styles from "./ScrollSection.module.css"
	import { classMapUtil } from "@feflow/core/utils"
	import type { HTMLAttributes } from "svelte/elements"
	import KeyboardArrowLeftIcon from "../../icons/KeyboardArrowLeftIcon.svelte"
	import KeyboardArrowRightIcon from "../../icons/KeyboardArrowRightIcon.svelte"
	import { scrollNavigatorAction } from "@feflow/core/actions"

	interface Props extends HTMLAttributes<HTMLElement> {
		data: SectionType[]
		scrollButtons?: boolean
	}

	let {
		class: className = "",
		data,
		scrollButtons = true,
		children,
		...rest
	}: Props = $props()

	let _scrollNavigatorAction:
		| ReturnType<typeof scrollNavigatorAction>
		| undefined

	let isFirst = $state(true)
	let isLast = $state(false)
	let isScrollable = $state(false)

	function setupNavigator(node: HTMLDivElement) {
		_scrollNavigatorAction = scrollNavigatorAction(node, {
			onChange(a, b, c) {
				isFirst = a
				isLast = b
				isScrollable = c
			}
		})
		return _scrollNavigatorAction
	}

	function next() {
		if (_scrollNavigatorAction?.controls) {
			_scrollNavigatorAction.controls.next()
		}
	}

	function prev() {
		if (_scrollNavigatorAction?.controls) {
			_scrollNavigatorAction.controls.prev()
		}
	}
</script>

<nav {...rest} class={classMapUtil(className, styles.scrollSection)}>
	{#if isScrollable && (!isFirst || isLast) && scrollButtons}
		<Button class={styles.arrowIndicator} variant="text" onclick={prev}>
			<KeyboardArrowLeftIcon height="16px" width="16px" />
		</Button>
	{/if}
	<div
		use:setupNavigator
		data-listeners={["scroll", "resize", "keyboard"]}
		class={styles.content}
	>
		{#each data as { onClick, reference, isActive }}
			<Button
				variant="text"
				onclick={onClick}
				class={classMapUtil(styles.button, {
					[styles.active]: isActive
				})}
				style="border-radius: 0;"
			>
				{reference}
			</Button>
		{/each}
	</div>
	{#if isScrollable && !isLast && scrollButtons}
		<Button variant="text" class={styles.arrowIndicator} onclick={next}>
			<KeyboardArrowRightIcon height="16px" width="16px" />
		</Button>
	{/if}
</nav>

{@render children?.()}

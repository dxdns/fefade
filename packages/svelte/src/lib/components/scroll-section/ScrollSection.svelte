<script lang="ts">
	import type { SectionType } from "@fefade/core/types"
	import Button from "../button/index.js"
	import { classMapUtil } from "@fefade/core/utils"
	import type { HTMLAttributes } from "svelte/elements"
	import {
		checkVisibilityAction,
		scrollNavigatorAction
	} from "@fefade/core/actions"
	import {
		keyboardArrowLeftIcon,
		keyboardArrowRightIcon
	} from "@fefade/core/icons"
	import styles from "./ScrollSection.module.css"

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

	let el: HTMLDivElement

	function handleChange() {
		checkVisibilityAction(el.firstElementChild as HTMLElement, {
			callback: (isVisible) => {
				isFirst = isVisible
			}
		})

		checkVisibilityAction(el.lastElementChild as HTMLElement, {
			callback: (isVisible) => {
				isLast = isVisible
			}
		})
	}

	function setupNavigator(node: HTMLDivElement) {
		_scrollNavigatorAction = scrollNavigatorAction(node)
		return _scrollNavigatorAction
	}

	function prev() {
		if (!_scrollNavigatorAction?.controls) return

		_scrollNavigatorAction.controls.prev()

		handleChange()
	}

	function next() {
		if (!_scrollNavigatorAction?.controls) return

		if (isLast) {
			_scrollNavigatorAction.controls.goTo(0)
		} else {
			_scrollNavigatorAction.controls.next()
		}

		handleChange()
	}
</script>

<nav {...rest} class={classMapUtil(className, styles.scrollSection)}>
	{#if (!isFirst || isLast) && scrollButtons}
		<Button class={styles.arrowIndicator} variant="text" onclick={prev}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 -960 960 960"
				style="
				display: inline-block; 
				vertical-align: middle;
				fill: currentColor;
				width: 16px;
				height: 16px;
				"
			>
				<path d={keyboardArrowLeftIcon}></path>
			</svg>
		</Button>
	{/if}
	<div
		use:setupNavigator
		data-listeners={["scroll", "resize", "keyboard"]}
		class={styles.content}
		bind:this={el}
	>
		{#each data as { onClick, reference, isActive } (reference)}
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
	{#if !isLast && scrollButtons}
		<Button variant="text" class={styles.arrowIndicator} onclick={next}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 -960 960 960"
				style="
				display: inline-block; 
				vertical-align: middle;
				fill: currentColor;
				width: 16px;
				height: 16px;
				"
			>
				<path d={keyboardArrowRightIcon}></path>
			</svg>
		</Button>
	{/if}
</nav>

{@render children?.()}

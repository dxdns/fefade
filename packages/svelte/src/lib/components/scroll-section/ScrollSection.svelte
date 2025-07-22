<script lang="ts">
	import type { SectionType } from "@dxdns/feflow-core/types"
	import Button from "../button/index.js"
	import styles from "./ScrollSection.module.css"
	import { classMapUtil } from "@dxdns/feflow-core/utils"
	import type { HTMLAttributes } from "svelte/elements"
	import KeyboardArrowLeftIcon from "../../icons/KeyboardArrowLeftIcon.svelte"
	import KeyboardArrowRightIcon from "../../icons/KeyboardArrowRightIcon.svelte"
	import {
		checkVisibilityAction,
		scrollNavigatorAction
	} from "@dxdns/feflow-core/actions"

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
			<KeyboardArrowLeftIcon height="16px" width="16px" />
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
			<KeyboardArrowRightIcon height="16px" width="16px" />
		</Button>
	{/if}
</nav>

{@render children?.()}

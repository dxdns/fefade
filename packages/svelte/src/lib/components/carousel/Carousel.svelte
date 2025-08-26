<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import styles from "./Carousel.module.css"
	import { scrollNavigatorAction } from "@navnex-kit/core/actions"
	import { classMapUtil } from "@navnex-kit/core/utils"
	import { onDestroy, onMount, type Snippet } from "svelte"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		auto?: boolean
		delay?: number
		actions?: Snippet<
			[
				{
					prev: () => void
					next: () => void
					goTo: (n: number) => void
					index: number
					length: number
				}
			]
		>
	}

	let {
		class: className = "",
		auto,
		delay = 3000,
		actions,
		children,
		...rest
	}: Props = $props()

	let index = $state(0)
	let childs: HTMLElement[] = $state([])

	let el: HTMLDivElement
	let interval: ReturnType<typeof setInterval>
	let _scrollNavigatorAction:
		| ReturnType<typeof scrollNavigatorAction>
		| undefined

	const isLast = $derived(index === childs.length - 1)

	function setupNavigator(node: HTMLDivElement) {
		_scrollNavigatorAction = scrollNavigatorAction(node)
		return _scrollNavigatorAction
	}

	function prev() {
		if (!_scrollNavigatorAction?.controls) return

		_scrollNavigatorAction.controls.prev()
		index -= 1
	}

	function next() {
		if (!_scrollNavigatorAction?.controls) return

		if (isLast) {
			_scrollNavigatorAction.controls.goTo(0)
			index = 0
		} else {
			_scrollNavigatorAction.controls.next()
			index += 1
		}
	}

	function goTo(n: number) {
		if (!_scrollNavigatorAction?.controls) return
		_scrollNavigatorAction.controls.goTo(n)
		index = n
	}

	onMount(() => {
		if (auto) {
			interval = setInterval(() => {
				next()
			}, delay)
		}
		childs = Array.from(el.children) as HTMLElement[]
	})

	onDestroy(() => {
		clearInterval(interval)
	})
</script>

<div
	{...rest}
	class={classMapUtil(className, [className, styles], styles.carousel)}
	aria-label="carousel"
>
	<div
		id={rest.id}
		use:setupNavigator
		data-listeners={["keyboard"]}
		class={styles.content}
		bind:this={el}
	>
		{@render children?.()}
	</div>
	{@render actions?.({
		prev,
		next,
		goTo,
		index,
		length: childs.length - 1
	})}
</div>

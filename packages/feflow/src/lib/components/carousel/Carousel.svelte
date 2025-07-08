<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import styles from "./Carousel.module.css"
	import { scrollNavigatorAction } from "../../actions/index.js"
	import { classMapUtil } from "@dxdns/feflow-core/utils"
	import { onDestroy, onMount, type Snippet } from "svelte"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		auto?: boolean
		delay?: number
		actions?: Snippet<
			[
				{
					prev: () => void
					next: () => void
					isFirst: boolean
					isLast: boolean
					goTo: (n: number) => void
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

	let isFirst = $state(false)
	let isLast = $state(false)

	let interval: ReturnType<typeof setInterval>

	let _scrollNavigatorAction:
		| ReturnType<typeof scrollNavigatorAction>
		| undefined

	function setupNavigator(node: HTMLDivElement) {
		_scrollNavigatorAction = scrollNavigatorAction(node, {
			onChange(a: boolean, b: boolean) {
				isFirst = a
				isLast = b
			}
		})
		return _scrollNavigatorAction
	}

	function prev() {
		if (!_scrollNavigatorAction?.controls) return

		_scrollNavigatorAction.controls.prev()
	}

	function next() {
		if (!_scrollNavigatorAction?.controls) return

		if (auto && isLast) {
			_scrollNavigatorAction.controls.goTo(0)
		} else {
			_scrollNavigatorAction.controls.next()
		}
	}

	function goTo(n: number) {
		if (!_scrollNavigatorAction?.controls) return
		_scrollNavigatorAction.controls.goTo(n)
	}

	onMount(() => {
		if (auto) {
			interval = setInterval(() => {
				next()
			}, delay)
		}
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
	>
		{@render children?.()}
	</div>
	{@render actions?.({ prev, next, isFirst, isLast, goTo })}
</div>

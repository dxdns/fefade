<script lang="ts" generics="T">
	import type { ActionType, VariantType } from "@dxdns/feflow-core/types"
	import { keyboardNavigationAction } from "@dxdns/feflow-core/actions"
	import styles from "./Autocomplete.module.css"
	import { classMapUtil } from "@dxdns/feflow-core/utils"
	import type { HTMLInputAttributes } from "svelte/elements"
	import type { Snippet } from "svelte"
	import { SearchInput } from "../search-input/index.js"

	interface Props<T>
		extends Omit<Omit<Omit<HTMLInputAttributes, "color">, "type">, "size"> {
		variant?: VariantType
		data: T[]
		filter: (item: T) => string
		onSelect?: (value: T) => void
		renderInput: Snippet<[T]>
	}

	let {
		variant = "text",
		data,
		filter,
		onSelect,
		renderInput,
		...rest
	}: Props<T> = $props()

	let currentIndex = $state(-1)
	let inputValue = $state("")
	let filtered: typeof data = $state([])
	let elItems: HTMLElement[] = $state([])

	function reset() {
		currentIndex = -1
		filtered = []
		inputValue = ""
	}

	function handleSelect(item: T, index: number, e: KeyboardEvent) {
		if (e.key === "Enter") {
			const parent = elItems[index]
			const child = parent.querySelector("button, a") as HTMLElement
			if (child) {
				child.click()
			} else {
				parent.click()
			}
		}

		onSelect?.(item)
		reset()
	}

	function handleFocusChange(index: number) {
		currentIndex = index
		if (currentIndex === -1) {
			reset()
			return
		}
		elItems[index].scrollIntoView({
			behavior: "smooth",
			block: "nearest"
		})
	}

	function handleOnInput(
		e: Event & {
			currentTarget: EventTarget & HTMLInputElement
		}
	) {
		const value = e.currentTarget.value.toLowerCase()
		inputValue = value

		const newData = data.filter((item) => {
			if (value.length === 0) return
			return filter(item).toLowerCase().includes(value)
		})
		filtered = newData
	}
</script>

<div class={styles.autocomplete}>
	<SearchInput
		{...rest}
		{variant}
		actions={[
			[
				keyboardNavigationAction as ActionType<HTMLElement>,
				{
					data: $state.snapshot(filtered),
					onSelect: handleSelect,
					onFocusChange: handleFocusChange
				}
			]
		]}
		oninput={handleOnInput}
		value={inputValue}
	/>

	<div class={styles.content}>
		{#each filtered as item, index (index)}
			<div
				role="button"
				tabindex="0"
				class={classMapUtil(styles.item, {
					[styles.focused]: currentIndex === index
				})}
				onkeyup={() => {}}
				onclick={reset}
				bind:this={elItems[index]}
			>
				{@render renderInput?.(item)}
			</div>
		{/each}
	</div>
</div>

<script lang="ts" generics="T">
	import type { ActionType } from "../../types/index.js"
	import { keyboardNavigationAction } from "../../actions/index.js"
	import styles from "./Autocomplete.module.css"
	import { classMapUtil } from "../../utils/index.js"
	import type { HTMLAttributes } from "svelte/elements"
	import type { Snippet } from "svelte"
	import { SearchInput } from "../search-input/index.js"
	import TextField from "../text-field/index.js"

	interface Props<T> extends HTMLAttributes<HTMLDivElement> {
		variant?: "text" | "search"
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
			child ? child.click() : parent.click()
		}

		onSelect?.(item)
		reset()
	}

	function handleFocusChange(index: number) {
		currentIndex = index
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

<div {...rest} class={styles.autocomplete}>
	{#if variant === "search"}
		<SearchInput
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
	{:else}
		<TextField
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
	{/if}

	<div class={styles.content}>
		{#each filtered as item, index}
			<div
				role="button"
				tabindex="0"
				class={classMapUtil(styles.item, {
					[styles.focused]: currentIndex === index
				})}
				style="margin-top: 0;"
				onkeyup={() => {}}
				onclick={reset}
				bind:this={elItems[index]}
			>
				{@render renderInput?.(item)}
			</div>
		{/each}
	</div>
</div>

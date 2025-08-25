<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"
	import { classMapUtil } from "@feflow-ui/core/utils"
	import Button from "../button/index.js"
	import type { NumberInputType } from "@feflow-ui/core/types"
	import { onMount, tick } from "svelte"
	import { fly } from "svelte/transition"
	import styles from "@feflow-ui/core/styles/NumberInput.module.css"

	interface Props
		extends Omit<
				Omit<Omit<Omit<HTMLInputAttributes, "step">, "value">, "type">,
				"size"
			>,
			NumberInputType {}

	let {
		class: className = "",
		variant = "contained",
		value = $bindable(0),
		onChange,
		autoFocus = false,
		step,
		size = "md",
		...rest
	}: Props = $props()

	let el: HTMLInputElement | undefined = $state()
	let internalValue = $state(0)
	let delay = $state(1)

	function increment() {
		if (rest.disabled || (rest.max !== undefined && value >= Number(rest.max)))
			return
		value = step ? value + step : value + 1
		onChange?.(value)
		internalValue++
		delay = 1
	}

	function decrement() {
		if (rest.disabled || (rest.min !== undefined && value <= Number(rest.min)))
			return
		value = step ? value - step : value - 1
		onChange?.(value)
		internalValue++
		delay = -1
	}

	async function handleKeydown(
		e: KeyboardEvent & {
			currentTarget: EventTarget & HTMLInputElement
		}
	) {
		if (e.key === "ArrowUp") {
			e.preventDefault()
			increment()
		} else if (e.key === "ArrowDown") {
			e.preventDefault()
			decrement()
		}

		await tick()
		handleFocus()
	}

	function handleFocus() {
		if (el && !rest.readonly) {
			el.focus()
		}
	}

	onMount(() => {
		if (autoFocus) handleFocus()
		value = rest.min !== undefined ? Number(rest.min) : value
	})
</script>

<div
	role="button"
	tabindex="0"
	class={classMapUtil(
		className,
		[className, styles],
		[variant, styles],
		[size, styles],
		styles.numberInput
	)}
>
	<Button
		aria-label="Decrement"
		{variant}
		{size}
		disabled={value === rest.min || rest.disabled}
		onclick={decrement}
	>
		-
	</Button>

	<div class={styles.wrapper}>
		{#key internalValue}
			<input
				{...rest}
				class={styles.input}
				bind:this={el}
				type="number"
				{value}
				onkeydown={handleKeydown}
				in:fly={{ y: delay * -15, duration: 200 }}
				out:fly={{ y: delay * 15, duration: 100 }}
			/>
		{/key}
	</div>
	<Button
		aria-label="Increment"
		{variant}
		{size}
		disabled={value === rest.max || rest.disabled}
		onclick={increment}
	>
		+
	</Button>
</div>

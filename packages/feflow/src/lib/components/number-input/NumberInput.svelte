<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import styles from "./NumberInput.module.css"
	import Button from "../button/index.js"
	import type { VariantType } from "../../types/index.js"
	import { onMount } from "svelte"

	interface Props
		extends Omit<Omit<Omit<HTMLInputAttributes, "step">, "value">, "type"> {
		variant?: VariantType
		value: number
		onChange?: (value: number) => void
		autoFocus?: boolean
		step?: number
	}

	let {
		class: className = "",
		variant = "contained",
		value = $bindable(0),
		onChange,
		autoFocus = false,
		step,
		...rest
	}: Props = $props()

	let el: HTMLInputElement | undefined

	function increment() {
		if (rest.disabled || (rest.max !== undefined && value >= Number(rest.max)))
			return
		value = step ? value + step : value + 1
		onChange?.(value)
	}

	function decrement() {
		if (rest.disabled || (rest.min !== undefined && value <= Number(rest.min)))
			return
		value = step ? value - step : value - 1
		onChange?.(value)
	}

	function handleKeydown(
		e: KeyboardEvent & { currentTarget: EventTarget & HTMLInputElement }
	) {
		if (e.key === "ArrowUp") {
			e.preventDefault()
			increment()
		} else if (e.key === "ArrowDown") {
			e.preventDefault()
			decrement()
		}
	}

	function handleFocus() {
		if (el && !rest.readonly) el.focus()
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
		styles.numberInput
	)}
	onclick={handleFocus}
	onkeydown={() => {}}
>
	<div class={styles.numberControl}>
		<Button
			{variant}
			disabled={value === rest.min || rest.disabled}
			onclick={decrement}
			style="height: 100%;"
		>
			-
		</Button>
		<Button
			{variant}
			disabled={value === rest.max || rest.disabled}
			onclick={increment}
			style="height: 100%;"
		>
			+
		</Button>
	</div>
	<input
		{...rest}
		bind:this={el}
		id={rest.id ?? "numberInput"}
		type="number"
		{value}
		onkeydown={handleKeydown}
	/>
</div>

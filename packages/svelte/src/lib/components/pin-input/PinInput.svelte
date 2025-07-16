<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"
	import styles from "./PinInput.module.css"
	import { classMapUtil } from "@dxdns/feflow-core/utils"
	import { onMount } from "svelte"

	interface Props
		extends Omit<Omit<Omit<HTMLInputAttributes, "max">, "min">, "type"> {
		autoFocus?: boolean
		isLoading?: boolean
	}

	let {
		class: className = "",
		autoFocus = false,
		isLoading = false,
		value = $bindable(""),
		...rest
	}: Props = $props()

	const KEYBOARD = {
		CONTROL: "Control",
		COMMAND: "Meta",
		V: "v",
		TAB: "Tab",
		BACKSPACE: "Backspace",
		LEFT: "ArrowLeft",
		RIGHT: "ArrowRight"
	}

	let el: HTMLInputElement

	function handleKeyDown(e: KeyboardEvent) {
		const isMeta = e.ctrlKey || e.metaKey

		switch (e.key) {
			case KEYBOARD.BACKSPACE:
				if (
					!el.value &&
					el.previousElementSibling instanceof HTMLInputElement
				) {
					el.previousElementSibling.focus()
				}
				break

			case KEYBOARD.LEFT:
				e.preventDefault()
				if (el.previousElementSibling instanceof HTMLInputElement) {
					el.previousElementSibling.focus()
				}
				break

			case KEYBOARD.RIGHT:
				e.preventDefault()
				if (el.nextElementSibling instanceof HTMLInputElement) {
					el.nextElementSibling.focus()
				}
				break

			case KEYBOARD.V:
				if (isMeta) {
					return
				}
				break

			default:
				if (e.key.length > 1 || !el.validity.valid) {
					e.preventDefault()
				}
				break
		}
	}

	function handleInput(e: Event) {
		const input = e.target as HTMLInputElement

		if (!/^[0-9]$/.test(input.value)) {
			input.value = ""
		}

		if (input.value && input.nextElementSibling instanceof HTMLInputElement) {
			input.nextElementSibling.focus()
		}
	}

	onMount(() => {
		if (el && autoFocus) el.focus()
	})
</script>

<input
	{...rest}
	disabled={isLoading}
	class={classMapUtil(className, [className, styles], styles.pinInput, {
		["pulse"]: isLoading
	})}
	bind:this={el}
	type="number"
	inputmode="numeric"
	pattern="[0-9]{1}"
	maxlength="1"
	min="0"
	max="9"
	placeholder="○"
	onkeydown={handleKeyDown}
	oninput={handleInput}
	{value}
/>

<style>
	.pulse {
		animation: pulse 2s infinite;
	}

	@keyframes pulse {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0.3;
		}
		100% {
			opacity: 1;
		}
	}
</style>

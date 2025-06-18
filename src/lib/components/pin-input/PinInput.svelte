<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"
	import styles from "./PinInput.module.css"
	import classMapUtil from "../../utils/classMapUtil.js"

	interface Props extends Omit<HTMLInputAttributes, "type"> {
		isLoading?: boolean
		type: "number" | "text"
	}

	let {
		class: className = "",
		children,
		type = "number",
		value,
		isLoading = false,
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

	function handleKeyDown(event: KeyboardEvent) {
		const isMeta = event.ctrlKey || event.metaKey

		switch (event.key) {
			case KEYBOARD.BACKSPACE:
				if (
					!el.value &&
					el.previousElementSibling instanceof HTMLInputElement
				) {
					el.previousElementSibling.focus()
				}
				break

			case KEYBOARD.LEFT:
				event.preventDefault()
				if (el.previousElementSibling instanceof HTMLInputElement) {
					el.previousElementSibling.focus()
				}
				break

			case KEYBOARD.RIGHT:
				event.preventDefault()
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
				if (event.key.length > 1 || !el.validity.valid) {
					event.preventDefault()
				}
				break
		}
	}

	function handleInput(event: Event) {
		const input = event.target as HTMLInputElement
		if (input.value && input.nextElementSibling instanceof HTMLInputElement) {
			input.nextElementSibling.focus()
		}
	}
</script>

<input
	{...rest}
	disabled={isLoading}
	class={classMapUtil(className, [className, styles], styles.pinInput, {
		["pulse"]: isLoading
	})}
	bind:this={el}
	type={type === "number" ? "number" : "text"}
	inputmode={type === "number" ? "numeric" : "text"}
	pattern={type === "number" ? "[0-9]{1}" : "^[a-zA-Z0-9]$"}
	maxlength="1"
	onkeydown={handleKeyDown}
	oninput={handleInput}
	placeholder="○"
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

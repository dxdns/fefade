<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import styles from "./NumberInput.module.css"
	import Button from "../button/index.js"
	import type { VariantType } from "../../types/index.js"

	interface Props extends Omit<HTMLInputAttributes, "type"> {
		variant?: VariantType
		increment: () => void
		decrement: () => void
		disableIncrement?: boolean
		disableDecrement?: boolean
	}

	let {
		class: className = "",
		variant = "contained",
		increment,
		decrement,
		disableIncrement = false,
		disableDecrement = false,
		...rest
	}: Props = $props()
</script>

<div class={classMapUtil(className, [className, styles], styles.inputNumber)}>
	<div class={styles.numberControl}>
		<Button
			{variant}
			disabled={disableDecrement}
			onclick={decrement}
			style="height: 100%;"
		>
			-
		</Button>
		<Button
			{variant}
			disabled={disableIncrement}
			onclick={increment}
			style="height: 100%;"
		>
			+
		</Button>
	</div>
	<input type="number" {...rest} />
</div>

<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"
	import { classMapUtil } from "@feflow-ui/core/utils"
	import styles from "@feflow-ui/core/styles/DateInput.module.css"

	interface Props extends Omit<HTMLInputAttributes, "type"> {
		type?: "date" | "month"
	}

	let { class: className = "", type = "date", ...rest }: Props = $props()

	let el: HTMLInputElement

	async function handleClick() {
		if (!el) return
		el.showPicker()
	}
</script>

<input
	{...rest}
	bind:this={el}
	class={classMapUtil(className, [className, styles], styles.dateInput)}
	{type}
	onclick={handleClick}
/>

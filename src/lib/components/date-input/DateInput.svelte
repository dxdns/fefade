<script lang="ts">
	import { getThemeConfig } from "../../utils/themeConfigUtil.js"
	import type { HTMLInputAttributes } from "svelte/elements"
	import { classMapUtil, mergeStyleUtil } from "../../utils/index.js"

	interface Props extends Omit<HTMLInputAttributes, "type"> {
		type?: "date" | "month"
	}

	let {
		class: className = "",
		type = "date",
		children,
		...rest
	}: Props = $props()

	const theme = $derived(getThemeConfig())

	let el: HTMLInputElement

	async function handleClick() {
		if (!el) return
		el.showPicker()
	}
</script>

<input
	{...rest}
	bind:this={el}
	class={classMapUtil(className, "dateInput")}
	style={mergeStyleUtil(`color-scheme: ${theme.mode};`, rest.style)}
	{type}
	onclick={handleClick}
/>

<style>
	.dateInput {
		user-select: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		background: var(--ff-color-surface);
		color: var(--ff-color-on-surface);
		border: 1px solid var(--ff-color-border);
		border-radius: 6px;
		padding: 8px 12px;
		font-size: 1rem;
		transition: border-color 0.3s ease;
		width: 100%;
		max-width: 300px;
		box-sizing: border-box;
		cursor: pointer;
	}

	.dateInput:focus {
		outline: none;
		border-color: var(--ff-color-primary);
	}

	.dateInput::-webkit-calendar-picker-indicator {
		opacity: 0.7;
		filter: invert(0.4);
		cursor: pointer;
		transition: opacity 0.2s ease;
	}

	@media (hover: hover) and (pointer: fine) {
		.dateInput::-webkit-calendar-picker-indicator:hover {
			opacity: 1;
		}
	}
</style>

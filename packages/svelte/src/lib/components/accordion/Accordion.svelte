<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"
	import type { AccordionType } from "@fefade/core/types"
	import { classMapUtil } from "@fefade/core/utils"
	import { keyboardArrowLeftIcon } from "@fefade/core/icons"
	import styles from "@fefade/core/styles/Accordion.module.css"
	import { onMount } from "svelte"

	interface Props extends Omit<HTMLInputAttributes, "id">, AccordionType {}

	let {
		class: className = "",
		label,
		variant,
		autofocus = false,
		children,
		...rest
	}: Props = $props()

	let el: HTMLInputElement

	onMount(() => {
		if (autofocus) {
			el.checked = true
		}
	})
</script>

<div
	class={classMapUtil(
		className,
		[className, styles],
		[variant, styles],
		styles.accordion
	)}
	style={rest.style}
>
	<input
		{...rest}
		bind:this={el}
		id={rest.id}
		class={styles.controller}
		type="radio"
		name="accordion"
		style={undefined}
		hidden
	/>
	<label for={rest.id} class={styles.header}>
		<label for={rest.id}>{label}</label>
		<div class={styles.icon}>
			<svg
				viewBox="0 -960 960 960"
				style="
				display: inline-block; 
				vertical-align: middle;
				fill: currentColor;
				width: 24px;
				height: 24px;
				"
			>
				<path d={keyboardArrowLeftIcon}></path>
			</svg>
		</div>
	</label>
	<div class={styles.content}>
		{@render children?.()}
	</div>
</div>

<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"
	import type { AccordionType } from "@fefade/core/types"
	import { classMapUtil } from "@fefade/core/utils"
	import { keyboardArrowLeftIcon } from "@fefade/core/icons"
	import styles from "@fefade/core/styles/Accordion.module.css"

	interface Props extends Omit<HTMLInputAttributes, "id">, AccordionType {}

	let {
		class: className = "",
		label,
		variant,
		children,
		...rest
	}: Props = $props()
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
		class={styles.controller}
		type="radio"
		id={rest.id}
		name="accordion"
		hidden
		style={undefined}
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

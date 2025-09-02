<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"
	import type { AccordionType } from "@dxdns-kit/core/types"
	import { classMapUtil } from "@dxdns-kit/core/utils"
	import { keyboardArrowLeftIcon } from "@dxdns-kit/core/icons"
	import styles from "@dxdns-kit/core/styles/Accordion.module.css"

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

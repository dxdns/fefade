<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"
	import type { AccordionType } from "@feflow-ui/core/types"
	import { KeyboardArrowLeftIcon } from "../../icons/index.js"
	import { classMapUtil } from "@feflow-ui/core/utils"
	import styles from "@feflow-ui/core/styles/Accordion.module.css"

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
			<KeyboardArrowLeftIcon />
		</div>
	</label>
	<div class={styles.content}>
		{@render children?.()}
	</div>
</div>

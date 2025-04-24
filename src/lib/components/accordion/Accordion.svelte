<script lang="ts">
	import type { ClassValue, HTMLAttributes } from "svelte/elements"
	import type { VariantType } from "../../types/index.js"
	import classMapUtil from "../../utils/classMapUtil.js"
	import styles from "./Accordion.module.css"
	import Button from "../button/index.js"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		class?: ClassValue
		open: boolean
		label: string
		variant?: VariantType
	}

	let {
		class: className = "",
		open,
		label,
		variant = "contained",
		children,
		...rest
	}: Props = $props()
</script>

<div class={styles.accordion} {...rest}>
	<Button
		class={classMapUtil({
			[styles.active]: open,
			[styles[variant]]: true
		})}
	>
		{label}
	</Button>
	<div
		class={classMapUtil({
			[styles.content]: true,
			[styles.active]: open
		})}
	>
		{@render children?.()}
	</div>
</div>

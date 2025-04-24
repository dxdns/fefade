<script lang="ts">
	import type { ClassValue, HTMLInputAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import styles from "./InputSearch.module.css"
	import Input from "../input/index.js"
	import type { ColorType, VariantType } from "../../types/index.js"
	import type { SvelteComponent } from "svelte"

	interface Props extends HTMLInputAttributes {
		class?: ClassValue
		variant?: VariantType
		color?: ColorType
		iconSearch: typeof SvelteComponent
	}

	let {
		class: className = "",
		variant = "text",
		color,
		iconSearch,
		...rest
	}: Props = $props()
</script>

<div
	class={classMapUtil({
		[className as string]: true,
		[styles[variant]]: true,
		[styles.inputSearch]: true
	})}
>
	<span class={styles.searchIcon}>
		{@html iconSearch}
	</span>
	<Input class={styles.inputGroup} {...rest} {variant} {color} type="search" />
</div>

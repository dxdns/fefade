<script lang="ts">
	import type { ClassValue, HTMLInputAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import styles from "./InputPassword.module.css"
	import Input from "../input/index.js"
	import type { ColorType, VariantType } from "../../types/index.js"
	import IconButton from "../icon-button/index.js"
	import type { SvelteComponent } from "svelte"

	interface Props extends HTMLInputAttributes {
		class?: ClassValue
		label?: string
		variant?: VariantType
		color?: ColorType
		icons: {
			visibility: typeof SvelteComponent
			visibilityOff: typeof SvelteComponent
		}
	}

	let {
		class: className = "",
		label,
		variant = "outlined",
		color,
		icons,
		...rest
	}: Props = $props()

	let passwordVisible = $state(false)

	function togglePasswordVisibility() {
		passwordVisible = !passwordVisible
	}
</script>

<div
	class={classMapUtil({
		[className as string]: true,
		[styles[variant]]: true,
		[styles.inputPassword]: true
	})}
>
	<IconButton
		type="button"
		class={styles.passwordToggleButton}
		onclick={togglePasswordVisibility}
	>
		{#if passwordVisible}
			{@html icons.visibilityOff}
		{:else}
			{@html icons.visibility}
		{/if}
	</IconButton>
	<Input
		class={styles.inputGroup}
		{...rest}
		{label}
		{variant}
		{color}
		type={passwordVisible ? "text" : "password"}
		focused={passwordVisible}
	/>
</div>

<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"
	import { classMapUtil } from "@feflow-ui/core/utils"
	import type { ColorType, SizeType, VariantType } from "@feflow-ui/core/types"
	import Button from "../button/index.js"
	import TextField from "../text-field/index.js"
	import { visibilityIcon, visibilityOffIcon } from "@feflow-ui/core/icons"
	import styles from "./PasswordInput.module.css"

	interface Props extends Omit<Omit<HTMLInputAttributes, "size">, "type"> {
		label?: string
		variant?: VariantType
		color?: ColorType
		size?: SizeType
	}

	let {
		class: className = "",
		label,
		variant = "outlined",
		color,
		size = "md",
		...rest
	}: Props = $props()

	let passwordVisible = $state(false)

	function togglePasswordVisibility() {
		passwordVisible = !passwordVisible
	}
</script>

<div
	class={classMapUtil(
		className,
		[className, styles],
		[variant, styles],
		styles.passwordInput
	)}
>
	<Button
		pressedEffect={false}
		type="button"
		variant="text"
		class={styles.passwordToggleButton}
		onclick={togglePasswordVisibility}
	>
		{#if passwordVisible}
			<svg
				class={classMapUtil([size, styles], styles.icon)}
				viewBox="0 -960 960 960"
				style="
				display: inline-block; 
				vertical-align: middle;
				fill: currentColor;
				width: 24px;
				height: 24px;
				"
			>
				<path d={visibilityIcon}></path>
			</svg>
		{:else}
			<svg
				class={classMapUtil([size, styles], styles.icon)}
				viewBox="0 -960 960 960"
				style="
				display: inline-block; 
				vertical-align: middle;
				fill: currentColor;
				width: 24px;
				height: 24px;
				"
			>
				<path d={visibilityOffIcon}></path>
			</svg>
		{/if}
	</Button>
	<TextField
		{...rest}
		class={styles.inputGroup}
		type={passwordVisible ? "text" : "password"}
		focused={passwordVisible}
		{label}
		{variant}
		{color}
		{size}
	/>
</div>

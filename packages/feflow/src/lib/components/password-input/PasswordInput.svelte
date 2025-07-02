<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import styles from "./PasswordInput.module.css"
	import type { ColorType, SizeType, VariantType } from "../../types/index.js"
	import { VisibilityIcon, VisibilityOffIcon } from "../../icons/index.js"
	import Button from "../button/index.js"
	import TextField from "../text-field/index.js"

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

	const iconSize = {
		xs: {
			height: "12px",
			width: "12px"
		},
		sm: {
			height: "16px",
			width: "16px"
		},
		md: {
			height: "20px",
			width: "20px"
		},
		lg: {
			height: "24px",
			width: "24px"
		},
		xl: {
			height: "32px",
			width: "32px"
		}
	}[size]
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
			<VisibilityIcon {...iconSize} />
		{:else}
			<VisibilityOffIcon {...iconSize} />
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

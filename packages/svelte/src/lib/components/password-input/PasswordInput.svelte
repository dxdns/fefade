<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"
	import { classMapUtil } from "@navnex-kit/core/utils"
	import type { ColorType, SizeType, VariantType } from "@navnex-kit/core/types"
	import { VisibilityIcon, VisibilityOffIcon } from "../../icons/index.js"
	import Button from "../button/index.js"
	import TextField from "../text-field/index.js"
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
			<VisibilityIcon class={classMapUtil([size, styles], styles.icon)} />
		{:else}
			<VisibilityOffIcon class={classMapUtil([size, styles], styles.icon)} />
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

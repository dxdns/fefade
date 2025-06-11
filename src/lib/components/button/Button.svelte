<script lang="ts">
	import type { HTMLButtonAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import type { ColorType, SizeType, VariantType } from "../../types/index.js"
	import Spinner from "../spinner/index.js"
	import styles from "./Button.module.css"

	interface Props extends HTMLButtonAttributes {
		pressedEffect?: boolean
		variant?: VariantType
		bgColor?: ColorType
		isLoading?: boolean
		roundedFull?: boolean
		size?: SizeType
	}

	let {
		class: className = "",
		pressedEffect = true,
		variant = "contained",
		bgColor = "primary",
		isLoading,
		roundedFull,
		size = "sm",
		children,
		...rest
	}: Props = $props()
</script>

<button
	{...rest}
	class={classMapUtil(
		className,
		[className, styles],
		[variant, styles],
		[size, styles],
		styles.button,
		[`bg-${bgColor}`],
		{ [styles.roundedFull]: roundedFull, [styles.pressedEffect]: pressedEffect }
	)}
	type={rest.type ?? "button"}
>
	{#if isLoading}
		<Spinner />
	{:else}
		{@render children?.()}
	{/if}
</button>

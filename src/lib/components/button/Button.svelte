<script lang="ts">
	import type { HTMLButtonAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import type { SizeType, VariantType } from "../../types/index.js"
	import Spinner from "../spinner/index.js"
	import styles from "./Button.module.css"

	interface Props extends HTMLButtonAttributes {
		pressedEffect?: boolean
		variant?: VariantType
		isLoading?: boolean
		roundedFull?: boolean
		size?: SizeType
	}

	let {
		class: className = "",
		pressedEffect = true,
		variant = "contained",
		isLoading = false,
		roundedFull = false,
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
		{ [styles.roundedFull]: roundedFull, [styles.pressedEffect]: pressedEffect }
	)}
	type={rest.type ?? "button"}
>
	{#if isLoading}
		<Spinner />
	{:else}
		<div class={styles.content}>
			{@render children?.()}
		</div>
	{/if}
</button>

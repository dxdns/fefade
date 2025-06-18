<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import styles from "./Card.module.css"
	import { glowOnHoverAction } from "../../actions/index.js"
	import type { VariantType } from "../../types/index.js"

	interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {
		glowOnHover?: boolean
		variant?: Exclude<VariantType, "text">
	}

	let {
		class: className = "",
		glowOnHover = false,
		variant = "outlined",
		children,
		...rest
	}: Props = $props()
</script>

{#snippet content()}
	<div
		{...rest}
		class={classMapUtil(
			className,
			[className, styles],
			[variant, styles],
			styles.card
		)}
	>
		{@render children?.()}
	</div>
{/snippet}

{#if glowOnHover}
	<div use:glowOnHoverAction>
		{@render content()}
	</div>
{:else}
	{@render content()}
{/if}

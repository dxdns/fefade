<script lang="ts">
	import { classMapUtil } from "@dxdns-kit/core/utils"
	import type { HTMLInputAttributes } from "svelte/elements"
	import type { CheckboxType } from "@dxdns-kit/core/types"
	import { checkmarkIcon } from "@dxdns-kit/core/icons"
	import styles from "@dxdns-kit/core/styles/Checkbox.module.css"

	interface Props
		extends Omit<Omit<Omit<HTMLInputAttributes, "size">, "type">, "color">,
			CheckboxType {}

	let {
		class: className = "",
		label,
		size = "sm",
		color = "secondary",
		...rest
	}: Props = $props()
</script>

<label
	class={classMapUtil(
		className,
		[className, styles],
		[size, styles],
		[color, styles],
		{
			["muted"]: rest.disabled
		},
		styles.checkbox
	)}
>
	<input {...rest} readonly={rest.readonly ?? rest.checked} type="checkbox" />
	<div class={styles.wrapper}>
		<div class={styles.bg}></div>
		<svg
			class={styles.icon}
			viewBox="0 0 24 24"
			style="
			display: inline-block; 
			vertical-align: middle;
			"
			fill="none"
		>
			<path
				stroke-linejoin="round"
				stroke-linecap="round"
				stroke-width="3"
				stroke="currentColor"
				d={checkmarkIcon}
			></path>
		</svg>
	</div>
	{#if label}
		{label}
	{/if}
</label>

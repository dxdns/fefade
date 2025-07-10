<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"
	import { classMapUtil } from "@feflow/core/utils"
	import type {
		ActionEntryType,
		SizeType,
		VariantType
	} from "@feflow/core/types"
	import styles from "./TextField.module.css"
	import { actionUtil } from "@feflow/core/utils"

	interface Props extends Omit<HTMLInputAttributes, "size"> {
		label?: string
		variant?: VariantType
		focused?: boolean
		actions?: ActionEntryType<HTMLElement>[]
		size?: SizeType
	}

	let {
		class: className = "",
		label,
		variant = "outlined",
		focused = false,
		actions,
		size = "md",
		children,
		...rest
	}: Props = $props()

	let el: HTMLInputElement | undefined

	$effect(() => {
		if (focused) {
			el?.focus()
		}
	})
</script>

<div
	class={classMapUtil(
		className,
		[className, styles],
		[variant, styles],
		[size, styles],
		styles.textField,
		{ [styles.labelEmpty]: !Boolean(label) }
	)}
>
	<input
		{...rest}
		bind:this={el}
		placeholder={rest.placeholder ?? " "}
		use:actionUtil={actions}
		style={undefined}
	/>

	{#if label}
		<label for={rest.id ?? rest.name}>{label}</label>
	{/if}

	<fieldset>
		<legend>
			<span>{label}</span>
		</legend>
	</fieldset>
</div>

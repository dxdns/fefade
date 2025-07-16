<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"
	import { classMapUtil } from "@dxdns/feflow-core/utils"
	import type { TextFieldType } from "@dxdns/feflow-core/types"
	import { actionUtil } from "@dxdns/feflow-core/utils"
	import styles from "@dxdns/feflow-core/styles/TextField.module.css"

	interface Props extends Omit<HTMLInputAttributes, "size">, TextFieldType {}

	let {
		class: className = "",
		label,
		variant = "outlined",
		focused = false,
		actions,
		size = "md",
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
		{
			[styles.labelEmpty]: !label
		}
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

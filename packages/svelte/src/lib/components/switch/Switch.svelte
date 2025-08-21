<script lang="ts">
	import type { SwitchType } from "@feflow-ui/core/types"
	import type { HTMLInputAttributes } from "svelte/elements"
	import { classMapUtil } from "@feflow-ui/core/utils"
	import type { Snippet } from "svelte"
	import { mergeStyleUtil, getPropValueUtil } from "@feflow-ui/core/utils"
	import styles from "@feflow-ui/core/styles/Switch.module.css"

	interface Props
		extends Omit<Omit<HTMLInputAttributes, "size">, "type">,
			SwitchType {
		label?: string | Snippet<[]>
	}

	let {
		class: className = "",
		size = "sm",
		label,
		indicatorColor = {
			unchecked: "var(--ff-on-surface)",
			checked: "var(--ff-on-primary)"
		},
		checked = $bindable(false),
		children,
		...rest
	}: Props = $props()

	const uncheckedColor = $derived(
		getPropValueUtil<{ unchecked?: string }, "unchecked">(
			indicatorColor,
			"unchecked",
			"var(--ff-on-surface)"
		)
	)

	const checkedColor = $derived(
		getPropValueUtil<{ checked?: string }, "checked">(
			indicatorColor,
			"checked",
			"var(--ff-on-primary)"
		)
	)
</script>

<div class={styles.switch}>
	<label
		for={rest.id ?? rest.name}
		class={classMapUtil(
			className,
			[className, styles],
			[size, styles],
			styles.content
		)}
	>
		<input
			{...rest}
			hidden
			style={undefined}
			type="checkbox"
			{checked}
			oninput={(e) => {
				checked = e.currentTarget.checked
			}}
		/>
		<span
			class={styles.slider}
			style={mergeStyleUtil(
				`--bg-unchecked: ${uncheckedColor};`,
				`--bg-checked: ${checkedColor};`,
				rest.style
			)}
		>
			{@render children?.()}
		</span>
	</label>
	{#if typeof label === "string"}
		{label}
	{:else}
		{@render label?.()}
	{/if}
</div>

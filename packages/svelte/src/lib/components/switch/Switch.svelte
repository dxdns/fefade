<script lang="ts">
	import { Constants } from "@dxdns-kit/core"
	import type { SwitchType } from "@dxdns-kit/core/types"
	import type { HTMLInputAttributes } from "svelte/elements"
	import { classMapUtil } from "@dxdns-kit/core/utils"
	import type { Snippet } from "svelte"
	import { mergeStyleUtil, getPropValueUtil } from "@dxdns-kit/core/utils"
	import styles from "@dxdns-kit/core/styles/Switch.module.css"

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
			unchecked: Constants.themeColorVar.onSurface,
			checked: Constants.themeColorVar.onPrimary
		},
		checked = $bindable(false),
		children,
		...rest
	}: Props = $props()

	const uncheckedColor = $derived(
		getPropValueUtil<{ unchecked?: string }, "unchecked">(
			indicatorColor,
			"unchecked",
			Constants.themeColorVar.onSurface
		)
	)

	const checkedColor = $derived(
		getPropValueUtil<{ checked?: string }, "checked">(
			indicatorColor,
			"checked",
			Constants.themeColorVar.onPrimary
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

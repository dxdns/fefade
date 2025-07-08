<script lang="ts">
	import type { SizeType } from "../../types/index.js"
	import styles from "./Switch.module.css"
	import type { HTMLInputAttributes } from "svelte/elements"
	import { classMapUtil } from "@dxdns/feflow-core/utils"
	import type { Snippet } from "svelte"
	import { mergeStyleUtil, getPropValueUtil } from "@dxdns/feflow-core/utils"

	interface Props extends Omit<Omit<HTMLInputAttributes, "size">, "type"> {
		size?: SizeType
		label?: string | Snippet<[]>
		indicatorColor?:
			| boolean
			| {
					unchecked?: string
					checked?: string
			  }
	}

	let {
		class: className = "",
		size = "sm",
		label,
		indicatorColor = {
			unchecked: "var(--ff-on-surface)",
			checked: "var(--ff-on-primary)"
		},
		children,
		...rest
	}: Props = $props()

	const uncheckedColor = getPropValueUtil<{ unchecked?: string }, "unchecked">(
		indicatorColor,
		"unchecked",
		"var(--ff-on-surface)"
	)

	const checkedColor = getPropValueUtil<{ checked?: string }, "checked">(
		indicatorColor,
		"checked",
		"var(--ff-on-primary)"
	)
</script>

<div class={styles.switch}>
	<label
		class={classMapUtil(
			className,
			[className, styles],
			[size, styles],
			styles.content
		)}
	>
		<input {...rest} style={undefined} type="checkbox" hidden />
		<span
			class={styles.slider}
			style={mergeStyleUtil(
				`--indicator-color-unchecked: ${uncheckedColor};`,
				`--indicator-color-checked: ${checkedColor};`,
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

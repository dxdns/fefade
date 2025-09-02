<script lang="ts">
	import { classMapUtil } from "@feflow-ui/core/utils"
	import type { HTMLInputAttributes } from "svelte/elements"
	import type { SizeType } from "@feflow-ui/core/types"
	import { closeIcon, menuIcon } from "@feflow-ui/core/icons"
	import styles from "@feflow-ui/core/styles/NavbarToggler.module.css"

	interface Props extends HTMLInputAttributes {
		visibleInSize?: SizeType
	}

	let { class: className = "", visibleInSize = "md", ...rest }: Props = $props()
</script>

<div
	class={classMapUtil(
		className,
		[className, styles],
		[visibleInSize, styles],
		styles.toggler
	)}
>
	<input
		{...rest}
		class={styles.controller}
		type="checkbox"
		name={rest.id ?? "toggler"}
		id={rest.id ?? "toggler"}
		style={undefined}
	/>
	<label class={styles.container} for={rest.id ?? "toggler"}>
		<svg
			class={styles.menuIcon}
			viewBox="0 -960 960 960"
			style="
			display: inline-block; 
			vertical-align: middle;
			fill: currentColor;
			width: 24px;
			height: 24px;
			"
		>
			<path d={menuIcon}></path>
		</svg>

		<svg
			class={styles.closeIcon}
			viewBox="0 -960 960 960"
			style="
			display: inline-block; 
			vertical-align: middle;
			fill: currentColor;
			width: 24px;
			height: 24px;
			"
		>
			<path d={closeIcon}></path>
		</svg>
	</label>
</div>
